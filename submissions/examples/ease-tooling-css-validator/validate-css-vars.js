/**
 * CSS Custom Property Validator
 * Checks that all var(--ease-*) usages have a corresponding declaration.
 */

const fs = require('fs');
const path = require('path');

// Navigate from submissions/examples/ease-tooling-css-validator to repo root
const REPO_ROOT = path.resolve(__dirname, '../../../'); 
const CORE_DIR = path.join(REPO_ROOT, 'core');
const COMPONENTS_DIR = path.join(REPO_ROOT, 'components');

const DECLARATION_REGEX = /(--ease-[a-zA-Z0-9-]+)\s*:/g;
const USAGE_REGEX = /var\((--ease-[a-zA-Z0-9-]+)(?:,\s*[^)]+)?\)/g;

function findCssFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      findCssFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.css')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

function getDeclaredVariables(cssFiles) {
  const declared = new Set();
  for (const file of cssFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = DECLARATION_REGEX.exec(content)) !== null) {
      declared.add(match[1]);
    }
  }
  return declared;
}

function validateUsages(cssFiles, declaredVars) {
  let hasErrors = false;
  let totalUsages = 0;
  for (const file of cssFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      while ((match = USAGE_REGEX.exec(line)) !== null) {
        totalUsages++;
        const variableName = match[1];
        if (!declaredVars.has(variableName)) {
          console.error(`❌ Undefined variable: ${variableName}`);
          console.error(`   Found in: ${file.replace(REPO_ROOT, '')}:${index + 1}`);
          console.error(`   Line: ${line.trim()}\n`);
          hasErrors = true;
        }
      }
    });
  }
  return { hasErrors, totalUsages };
}

function main() {
  console.log('🔍 Validating CSS Custom Properties...');
  
  const coreFiles = findCssFiles(CORE_DIR);
  const componentFiles = findCssFiles(COMPONENTS_DIR);
  
  // We assume all source-of-truth variables are declared in core/
  const declaredVars = getDeclaredVariables(coreFiles);
  console.log(`✅ Found ${declaredVars.size} unique --ease-* declarations in core/`);
  
  const allCssFiles = [...coreFiles, ...componentFiles];
  console.log(`📂 Scanning ${allCssFiles.length} CSS files for var(--ease-*) usages...`);
  
  const { hasErrors, totalUsages } = validateUsages(allCssFiles, declaredVars);
  console.log(`\n📊 Validated ${totalUsages} variable usages.`);
  
  if (hasErrors) {
    console.error('❌ Validation failed! Undefined variables found.');
    process.exit(1);
  } else {
    console.log('🎉 All CSS variable usages resolve correctly!');
    process.exit(0);
  }
}

main();
