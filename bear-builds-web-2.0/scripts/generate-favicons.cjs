const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

const emblemSvg = fs.readFileSync('src/assets/images/logo_emblem.svg', 'utf8');

// Match all path tags inside the emblem
const paths = emblemSvg.match(/<path[^>]+(\/>|><\/path>)/g).join('\n    ');

// Square SVG with 2400x2400 coordinate space centered on emblem (886.5, 1024)
const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-314 -176 2400 2400" width="100%" height="100%">
  <g id="logo-emblem">
    ${paths}
  </g>
</svg>`;

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

fs.writeFileSync('public/favicon.svg', squareSvg);
console.log('Saved public/favicon.svg');

const sizes = [16, 32, 48, 64, 96, 144, 180, 192, 512];
Promise.all(sizes.map(size => {
  const filename = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
  return sharp(Buffer.from(squareSvg))
    .resize(size, size)
    .png()
    .toFile(path.join('public', filename))
    .then(() => console.log('Generated', filename));
})).then(() => {
  // Use ImageMagick to bundle 16, 32, 48, 64 into favicon.ico
  execSync('convert public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon-64x64.png public/favicon.ico');
  console.log('Successfully generated public/favicon.ico with multi-resolution layers!');
}).catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
