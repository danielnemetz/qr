// Polyfill: qr-code-styling-node references the browser global `self`
(globalThis as any).self = globalThis;

const QRCodeStyling = require('qr-code-styling-node');

import { config } from './config';
import { buildWifiString } from './wifi';
import type { WifiConfig } from './types';

/**
 * Generates a styled QR code PNG buffer with transparent background.
 */
export const generateQrBuffer = async (cfg: WifiConfig): Promise<Buffer> => {
  const nodeCanvas = require('canvas');

  const qrCode = new QRCodeStyling({
    nodeCanvas,
    width: config.qrSize,
    height: config.qrSize,
    data: buildWifiString(cfg),
    margin: config.qrMargin,

    dotsOptions: {
      type: config.dotsType,
      gradient: {
        type: "linear",
        rotation: config.dotsGradientRotation,
        colorStops: [
          { offset: 0, color: config.colors.dotsStart },
          { offset: 1, color: config.colors.dotsEnd },
        ],
      },
    },

    cornersSquareOptions: {
      type: config.cornersSquareType,
      color: config.colors.corners,
    },

    cornersDotOptions: {
      type: config.cornersDotType,
      color: config.colors.corners,
    },

    backgroundOptions: {
      color: "transparent",
    },

    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 10,
    },
  });

  return await qrCode.getRawData("png");
};
