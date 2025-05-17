const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const publicDir = path.join(process.cwd(), 'public');

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function createImage(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#4F46E5');
  gradient.addColorStop(1, '#7C3AED');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = `${width * 0.1}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(publicDir, filename), buffer);
}

// Generate all required images
function generateImages() {
  try {
    // Icon (512x512)
    createImage(512, 512, 'SC', 'icon.png');

    // Splash (1200x630)
    createImage(1200, 630, 'SmashClass', 'splash.png');

    // Hero (1200x630)
    createImage(1200, 630, 'Web3 Fitness & Wellness', 'hero.png');

    // OG Image (1200x630)
    createImage(1200, 630, 'SmashClass - Web3 Fitness', 'og-image.png');

    console.log('Successfully generated all images!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateImages(); 