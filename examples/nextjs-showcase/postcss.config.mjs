import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    process.env.NODE_ENV === 'production' 
      ? purgecss({
          content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
            '../../submissions/react/**/*.{js,ts,jsx,tsx,mdx}',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }) 
      : undefined,
  ].filter(Boolean)
};

export default config;
