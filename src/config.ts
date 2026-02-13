// ============================================================
// Visual configuration for the Wi-Fi QR code generator.
// Adjust these values to change the look of the output image.
// ============================================================

export const config = {

  // --- Image Dimensions ---
  imageSize: 1200,            // Total canvas size (px, square)
  qrSize: 850,                // QR code area size (px)
  qrOffsetY: -30,             // Vertical shift of QR code (negative = up)
  qrMargin: 30,               // Inner padding around QR modules

  // --- Colors ---
  colors: {
    background: '#E4E4F4',    // Canvas background (lavender)
    dotsStart: '#2B5A8C',     // QR dot gradient start (dark blue)
    dotsEnd: '#1B6B4A',       // QR dot gradient end (dark green)
    corners: '#2B4C7E',       // Corner marker color (dark navy)
    text: '#3A3A50',          // Password text color
  },

  // --- QR Dot Style ---
  // Options: 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'square'
  dotsType: 'rounded' as const,

  // Gradient direction in radians (0 = left→right, π/4 = diagonal ↘)
  dotsGradientRotation: Math.PI / 4,

  // --- Corner Markers ---
  // Outer square options: 'square' | 'extra-rounded' | 'dot'
  cornersSquareType: 'extra-rounded' as const,
  // Inner dot options: 'square' | 'dot'
  cornersDotType: 'dot' as const,

  // --- Info Text below QR ---
  showInfoInImage: true,      // Render SSID + password below the QR code
  fontSize: 32,
  fontFamily: '"SF Mono", "Menlo", "Consolas", monospace',
  textTemplateSsid: 'Network: {ssid}',
  textTemplatePassword: 'Password: {password}',

  // --- Output ---
  outputDir: '.',             // Directory for generated images

} as const;
