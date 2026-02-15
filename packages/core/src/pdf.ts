/**
 * Wraps a ready-made PNG image into a print-ready A4 PDF with crop marks.
 * No QR generation logic here – that stays in image.ts / qr.ts.
 */

/**
 * Crop mark length & offset from the image edge (in PDF points).
 */
const CROP_LEN = 18;
const CROP_GAP = 6;
const CROP_WEIGHT = 0.5;

/**
 * Takes a PNG buffer (the already-rendered QR image) and returns an A4 PDF
 * buffer with the image centred on the page and crop marks at the corners.
 */
export const composePdfBuffer = async (
  pngBuffer: Buffer,
): Promise<Buffer> => {
  const PDFDocument = (await import('pdfkit')).default;

  // A4 = 595.28 × 841.89 pt
  const pageW = 595.28;
  const pageH = 841.89;

  // Scale image to fit nicely (max 70 % of page width)
  const maxImgW = pageW * 0.7;

  const doc = new PDFDocument({ size: 'A4', margin: 0 });

  // Collect PDF into a buffer
  const chunks: Buffer[] = [];
  doc.on('data', (c: Buffer) => chunks.push(c));

  const finished = new Promise<Buffer>((resolve) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)));
  });

  // Place QR image – pdfkit can read PNG from a Buffer directly
  const imgW = maxImgW;
  const imgH = maxImgW; // QR images are square
  const imgX = (pageW - imgW) / 2;
  const imgY = (pageH - imgH) / 2;

  doc.image(pngBuffer, imgX, imgY, { width: imgW, height: imgH });

  // ── Draw crop marks ───────────────────────────────────────────────
  doc.lineWidth(CROP_WEIGHT);
  doc.strokeColor('#000000');

  const drawCropMark = (x: number, y: number, dx: number, dy: number) => {
    // Horizontal mark
    doc
      .moveTo(x + dx * CROP_GAP, y)
      .lineTo(x + dx * (CROP_GAP + CROP_LEN), y)
      .stroke();
    // Vertical mark
    doc
      .moveTo(x, y + dy * CROP_GAP)
      .lineTo(x, y + dy * (CROP_GAP + CROP_LEN))
      .stroke();
  };

  drawCropMark(imgX, imgY, -1, -1);               // Top-left
  drawCropMark(imgX + imgW, imgY, 1, -1);          // Top-right
  drawCropMark(imgX, imgY + imgH, -1, 1);          // Bottom-left
  drawCropMark(imgX + imgW, imgY + imgH, 1, 1);    // Bottom-right

  doc.end();
  return finished;
};
