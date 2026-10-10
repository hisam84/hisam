const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimize() {
  const inputImage = path.resolve(__dirname, 'Hisam.png');
  const publicDir = path.resolve(__dirname, 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const initialStat = fs.statSync(inputImage);
  console.log(`Original Hisam.png size: ${(initialStat.size / 1024).toFixed(1)} KB`);

  // 1. WebP High Quality (Full resolution)
  const webpFull = path.join(publicDir, 'Hisam.webp');
  await sharp(inputImage)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpFull);
  console.log(`Generated Hisam.webp: ${(fs.statSync(webpFull).size / 1024).toFixed(1)} KB`);

  // 2. Optimized PNG (Compressed for fallback)
  const pngOptimized = path.join(publicDir, 'Hisam.png');
  await sharp(inputImage)
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(pngOptimized);
  console.log(`Generated public/Hisam.png: ${(fs.statSync(pngOptimized).size / 1024).toFixed(1)} KB`);

  // 3. WebP Portrait for Portfolio UI (width 600)
  const webpPortrait = path.join(publicDir, 'hisam-portrait.webp');
  await sharp(inputImage)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPortrait);
  console.log(`Generated hisam-portrait.webp (600px): ${(fs.statSync(webpPortrait).size / 1024).toFixed(1)} KB`);

  // 4. WebP Avatar / Thumbnail (240x240)
  const webpAvatar = path.join(publicDir, 'hisam-avatar.webp');
  await sharp(inputImage)
    .resize(240, 240, { fit: 'cover', position: 'top' })
    .webp({ quality: 85, effort: 6 })
    .toFile(webpAvatar);
  console.log(`Generated hisam-avatar.webp (240x240): ${(fs.statSync(webpAvatar).size / 1024).toFixed(1)} KB`);

  // 5. High-Resolution OG Image (1200x630 Social Card)
  const ogImage = path.join(publicDir, 'og-image.jpg');
  const portraitForOg = await sharp(inputImage)
    .resize({ height: 550, fit: 'inside' })
    .toBuffer();

  // Create clean social card canvas (1200x630 dark slate)
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 23, g: 23, b: 20, alpha: 1 } // matches dark brand theme #171714
    }
  })
    .composite([
      {
        input: portraitForOg,
        top: 40,
        left: 750
      }
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(ogImage);
  console.log(`Generated og-image.jpg: ${(fs.statSync(ogImage).size / 1024).toFixed(1)} KB`);

  console.log('Image optimization complete!');
}

optimize().catch(console.error);
