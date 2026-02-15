import { composePdfBuffer } from '@qr/core';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const png = body?.png;

  if (!png || typeof png !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'PNG data (base64) is required' });
  }

  const pngBuffer = Buffer.from(png, 'base64');
  const pdfBuffer = await composePdfBuffer(pngBuffer);

  setResponseHeader(event, 'Content-Type', 'application/pdf');
  setResponseHeader(event, 'Content-Disposition', 'inline; filename="qr.pdf"');
  return pdfBuffer;
});
