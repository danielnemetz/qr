import * as fs from 'fs';
import { config } from './config';
import { generateQrBuffer } from './qr';
import type { WifiConfig } from './types';

const { createCanvas, loadImage } = require('canvas');

/**
 * Composes the final image: background → QR code → info text.
 */
export const composeImage = async (cfg: WifiConfig): Promise<void> => {
  console.log(`Generating styled QR Code for SSID: "${cfg.ssid}"...`);

  // Generate the QR code
  const qrBuffer = await generateQrBuffer(cfg);
  const qrImage = await loadImage(qrBuffer);

  // Create canvas
  const canvas = createCanvas(config.imageSize, config.imageSize);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = config.colors.background;
  ctx.fillRect(0, 0, config.imageSize, config.imageSize);

  // QR code (centered)
  const qrX = (config.imageSize - config.qrSize) / 2;
  const qrY = (config.imageSize - config.qrSize) / 2 + config.qrOffsetY;
  ctx.drawImage(qrImage, qrX, qrY, config.qrSize, config.qrSize);

  // Info text
  if (config.showInfoInImage) {
    ctx.font = `500 ${config.fontSize}px ${config.fontFamily}`;
    ctx.fillStyle = config.colors.text;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const centerX = config.imageSize / 2;
    let textY = config.imageSize - 130;

    const ssidLabel = config.textTemplateSsid.replace('{ssid}', cfg.ssid);
    ctx.fillText(ssidLabel, centerX, textY);

    if (cfg.password) {
      textY += config.fontSize + 12;
      const pwdLabel = config.textTemplatePassword.replace('{password}', cfg.password);
      ctx.fillText(pwdLabel, centerX, textY);
    }
  }

  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(cfg.outputFile, buffer);
  console.log(`Success! Saved to ./${cfg.outputFile}`);
};
