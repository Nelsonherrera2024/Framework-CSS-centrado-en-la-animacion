import { describe, it, expect } from 'vitest';
import { execSync } from 'node:child_process';

describe('validate-package.mjs', () => {
  it('should pass validation against the committed package.json', () => {
    const result = execSync(
      'node scripts/validate-package.mjs',
      { encoding: 'utf8', cwd: new URL('..', import.meta.url).pathname },
    );
    expect(result).toContain('package.json is valid');
  });
});
