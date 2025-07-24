import fs from 'node:fs';
const cssPath = 'dist/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');
cssContent = cssContent.replace(
  '@import"tailwindcss/theme.css"layer(theme);@import"tailwindcss/utilities.css"layer(utilities);',
  '@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/utilities.css" layer(utilities);'
);
fs.writeFileSync(cssPath, cssContent);
