// Script to optimize images
// Requires: npm install sharp glob

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

async function optimizeImages() {
  const images = glob.sync('public/**/*.{jpg,jpeg,png}', {
    ignore: ['node_modules/**', '.next/**']
  });

  for (const imagePath of images) {
    const dir = path.dirname(imagePath);
    const filename = path.basename(imagePath, path.extname(imagePath));
    const ext = path.extname(imagePath);

    console.log(`Processing: ${imagePath}`);

    try {
      // Read original image
      const image = sharp(imagePath);
      const metadata = await image.metadata();

      // Create optimized JPEG version
      if (ext !== '.jpg' && ext !== '.jpeg') {
        await image
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(dir, `${filename}.jpg`));
      }

      // Create WebP version
      await image
        .webp({ quality: 85 })
        .toFile(path.join(dir, `${filename}.webp`));

      // Create sizes for hero images
      if (imagePath.includes('background/')) {
        // Full HD version
        await image
          .resize(1920, 1080, { fit: 'cover' })
          .jpeg({ quality: 90, progressive: true })
          .toFile(path.join(dir, `${filename}-1920.jpg`));

        // 4K version
        await image
          .resize(3840, 2160, { fit: 'cover' })
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(dir, `${filename}-4k.jpg`));
      }

      // Create sizes for location cards
      if (imagePath.includes('locations/') || imagePath.includes('arbol/') || imagePath.includes('1898/')) {
        // Card size
        await image
          .resize(800, 600, { fit: 'cover' })
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(dir, `${filename}-card.jpg`));

        // Thumbnail
        await image
          .resize(400, 300, { fit: 'cover' })
          .jpeg({ quality: 80, progressive: true })
          .toFile(path.join(dir, `${filename}-thumb.jpg`));
      }

      console.log(`✓ Optimized: ${imagePath}`);
    } catch (error) {
      console.error(`✗ Error processing ${imagePath}:`, error.message);
    }
  }
}

optimizeImages().catch(console.error);