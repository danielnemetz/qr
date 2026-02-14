import { d as defineEventHandler, r as readBody, c as createError, s as setResponseHeader } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

// src/wifi.ts
var escapeString = (str) => {
  if (!str) return "";
  return str.replace(/([\\;,:"])/g, "\\$1");
};
var buildWifiString = (cfg) => {
  const safeSsid = escapeString(cfg.ssid);
  const safePass = cfg.password ? escapeString(cfg.password) : "";
  return `WIFI:S:${safeSsid};T:${cfg.encryption};P:${safePass};H:${cfg.isHidden};;`;
};

// src/payloads.ts
function escapeVcardValue(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function buildVcardString(p) {
  const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${escapeVcardValue(p.name)}`];
  if (p.phone?.trim()) lines.push(`TEL:${p.phone.trim().replace(/\s/g, "")}`);
  if (p.email?.trim()) lines.push(`EMAIL:${p.email.trim()}`);
  if (p.org?.trim()) lines.push(`ORG:${escapeVcardValue(p.org)}`);
  lines.push("END:VCARD");
  return lines.join("\r\n");
}
function buildMailtoString(p) {
  const email = p.email.trim();
  const params = new URLSearchParams();
  if (p.subject?.trim()) params.set("subject", p.subject.trim());
  if (p.body?.trim()) params.set("body", p.body.trim());
  const qs = params.toString();
  return qs ? `mailto:${email}?${qs}` : `mailto:${email}`;
}
function buildSmsString(p) {
  const phone = p.phone.trim().replace(/\s/g, "");
  if (p.body?.trim()) {
    return `sms:${phone}?body=${encodeURIComponent(p.body.trim())}`;
  }
  return `sms:${phone}`;
}
function buildTelString(phone) {
  return `tel:${phone.trim().replace(/\s/g, "")}`;
}
function buildGeoString(p) {
  return `geo:${p.lat},${p.lng}`;
}

// src/config.ts
var config = {
  // --- Image Dimensions ---
  imageSize: 1200,
  // Total canvas size (px, square)
  maxImageSize: 2400,
  // Cap for API/style overrides (DoS prevention)
  qrSize: 850,
  // QR code area size (px)
  qrOffsetY: -30,
  // Vertical shift of QR code (negative = up)
  qrMargin: 30,
  // Inner padding around QR modules
  // --- Colors ---
  colors: {
    background: "#E4E4F4",
    // Canvas background (lavender)
    dotsStart: "#2B5A8C",
    // QR dot gradient start (dark blue)
    dotsEnd: "#1B6B4A",
    // QR dot gradient end (dark green)
    corners: "#2B4C7E",
    // Corner marker color (dark navy)
    text: "#3A3A50"
    // Password text color
  },
  // --- QR Dot Style ---
  // Options: 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'square'
  dotsType: "rounded",
  // Gradient direction in radians (0 = left→right, π/4 = diagonal ↘)
  dotsGradientRotation: Math.PI / 4,
  // --- Corner Markers ---
  // Outer square options: 'square' | 'extra-rounded' | 'dot'
  cornersSquareType: "extra-rounded",
  // Inner dot options: 'square' | 'dot'
  cornersDotType: "dot",
  // --- Info Text below QR ---
  showInfoInImage: true,
  // Render SSID + password below the QR code
  fontSize: 32,
  fontFamily: '"SF Mono", "Menlo", "Consolas", monospace',
  textTemplateSsid: "Network: {ssid}",
  textTemplatePassword: "Password: {password}"};
var resolveStyle = (overrides) => {
  const s = overrides ?? {};
  const requestedSize = s.imageSize ?? config.imageSize;
  const imageSize = Math.min(
    Math.max(100, Number(requestedSize) || config.imageSize),
    config.maxImageSize
  );
  return {
    imageSize,
    qrSize: Math.round(imageSize * (config.qrSize / config.imageSize)),
    qrOffsetY: Math.round(imageSize * (config.qrOffsetY / config.imageSize)),
    qrMargin: s.qrMargin ?? config.qrMargin,
    colorBackground: s.colorBackground ?? config.colors.background,
    colorDotsStart: s.colorDotsStart ?? config.colors.dotsStart,
    colorDotsEnd: s.colorDotsEnd ?? config.colors.dotsEnd,
    colorCorners: s.colorCorners ?? config.colors.corners,
    colorText: s.colorText ?? config.colors.text,
    dotsType: s.dotsType ?? config.dotsType,
    dotsGradientRotation: config.dotsGradientRotation,
    cornersSquareType: s.cornersSquareType ?? config.cornersSquareType,
    cornersDotType: s.cornersDotType ?? config.cornersDotType,
    showInfoInImage: s.showInfoInImage === false ? false : s.showInfoInImage ?? config.showInfoInImage,
    fontSize: config.fontSize,
    fontFamily: config.fontFamily,
    textTemplateSsid: config.textTemplateSsid,
    textTemplatePassword: config.textTemplatePassword
  };
};

// src/buildFromPayload.ts
function buildLabelLines(type, payload) {
  const resolved = resolveStyle(void 0);
  if (type === "wifi") {
    const p = payload;
    return [
      resolved.textTemplateSsid.replace("{ssid}", p.ssid),
      ...p.password ? [resolved.textTemplatePassword.replace("{password}", p.password)] : []
    ];
  }
  if (type === "url") return [payload.url];
  if (type === "text") {
    const firstLine = payload.text.split(/\r?\n/)[0]?.trim() || "";
    return firstLine ? [firstLine] : [];
  }
  if (type === "vcard") return [payload.name];
  if (type === "email") return [payload.email];
  if (type === "sms" || type === "tel") return [payload.phone];
  if (type === "geo") {
    const p = payload;
    return [`${p.lat}, ${p.lng}`];
  }
  return [];
}
function buildQrPayload(type, payload) {
  let data;
  const labelLines = buildLabelLines(type, payload);
  let filename;
  if (type === "wifi") {
    const p = payload;
    const cfg = { ...p};
    data = buildWifiString(cfg);
    filename = p.ssid.replace(/[^a-zA-Z0-9_-]/g, "_");
  } else if (type === "url") {
    const p = payload;
    data = p.url;
    try {
      const u = new URL(p.url);
      filename = u.hostname.replace(/[^a-zA-Z0-9_-]/g, "_") || "url";
    } catch {
      filename = "url";
    }
  } else if (type === "text") {
    const p = payload;
    data = p.text;
    const firstLine = p.text.split(/\r?\n/)[0]?.slice(0, 30) || "text";
    filename = firstLine.replace(/[^a-zA-Z0-9_-]/g, "_") || "text";
  } else if (type === "vcard") {
    const p = payload;
    const name = p.name || "Contact";
    data = buildVcardString({
      name,
      phone: p.phone || void 0,
      email: p.email || void 0,
      org: p.org || void 0
    });
    filename = name.replace(/[^a-zA-Z0-9_-]/g, "_") || "vcard";
  } else if (type === "email") {
    const p = payload;
    data = buildMailtoString({
      email: p.email,
      subject: p.subject || void 0,
      body: p.body || void 0
    });
    filename = p.email.replace(/[^a-zA-Z0-9_.@+-]/g, "_") || "email";
  } else if (type === "sms") {
    const p = payload;
    data = buildSmsString({ phone: p.phone, body: p.body || void 0 });
    filename = `sms_${p.phone.replace(/\D/g, "").slice(-8)}` || "sms";
  } else if (type === "tel") {
    const p = payload;
    data = buildTelString(p.phone);
    filename = `tel_${p.phone.replace(/\D/g, "").slice(-8)}` || "tel";
  } else {
    const p = payload;
    data = buildGeoString(p);
    filename = `geo_${p.lat}_${p.lng}`.replace(/[^a-zA-Z0-9_.-]/g, "_") || "geo";
  }
  return { data, labelLines, filename };
}
var QR_TYPES = ["wifi", "url", "text", "vcard", "email", "sms", "tel", "geo"];
function parseType(value) {
  const t = String(value ?? "wifi").toLowerCase();
  return QR_TYPES.includes(t) ? t : "wifi";
}
function parseNum(s) {
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

// src/qr.ts
globalThis.self = globalThis;
var generateQrBuffer = async (data, style) => {
  const { default: QRCodeStyling } = await import('qr-code-styling-node');
  const nodeCanvas = await import('canvas');
  const s = resolveStyle(style);
  const qrCode = new QRCodeStyling({
    nodeCanvas,
    width: s.qrSize,
    height: s.qrSize,
    data,
    margin: s.qrMargin,
    dotsOptions: {
      type: s.dotsType,
      gradient: {
        type: "linear",
        rotation: s.dotsGradientRotation,
        colorStops: [
          { offset: 0, color: s.colorDotsStart },
          { offset: 1, color: s.colorDotsEnd }
        ]
      }
    },
    cornersSquareOptions: {
      type: s.cornersSquareType,
      color: s.colorCorners
    },
    cornersDotOptions: {
      type: s.cornersDotType,
      color: s.colorCorners
    },
    backgroundOptions: {
      color: "transparent"
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 10
    }
  });
  return await qrCode.getRawData("png");
};

// src/image.ts
var MAX_LABEL_LEN = 45;
var composeImageBuffer = async (data, style, labelLines) => {
  const s = resolveStyle(style);
  const { createCanvas, loadImage } = await import('canvas');
  const qrBuffer = await generateQrBuffer(data, style);
  const qrImage = await loadImage(qrBuffer);
  const canvas = createCanvas(s.imageSize, s.imageSize);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = s.colorBackground;
  ctx.fillRect(0, 0, s.imageSize, s.imageSize);
  const showText = Boolean(s.showInfoInImage && labelLines?.length);
  const qrOffsetY = showText ? s.qrOffsetY : 0;
  const qrX = (s.imageSize - s.qrSize) / 2;
  const qrY = (s.imageSize - s.qrSize) / 2 + qrOffsetY;
  ctx.drawImage(qrImage, qrX, qrY, s.qrSize, s.qrSize);
  if (s.showInfoInImage && labelLines?.length) {
    const fontSize = Math.round(s.imageSize * (s.fontSize / 1200));
    ctx.font = `500 ${fontSize}px ${s.fontFamily}`;
    ctx.fillStyle = s.colorText;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const centerX = s.imageSize / 2;
    let textY = s.imageSize - Math.round(130 * (s.imageSize / 1200));
    for (const line of labelLines) {
      const display = line.length > MAX_LABEL_LEN ? line.slice(0, MAX_LABEL_LEN - 3) + "..." : line;
      ctx.fillText(display, centerX, textY);
      textY += fontSize + 12;
    }
  }
  return canvas.toBuffer("image/png");
};

const generate_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const type = parseType(body?.type);
  let payload;
  if (type === "wifi") {
    const ssid = String(body.ssid ?? "").trim();
    if (!ssid) throw createError({ statusCode: 400, statusMessage: "SSID is required" });
    const encryption = body.encryption ?? "WPA";
    if (!["WPA", "WEP", "nopass"].includes(encryption)) {
      throw createError({ statusCode: 400, statusMessage: "Invalid encryption type" });
    }
    const password = body.password ? String(body.password) : void 0;
    if (encryption !== "nopass" && !password) {
      throw createError({ statusCode: 400, statusMessage: "Password is required for encrypted networks" });
    }
    payload = {
      ssid,
      password,
      encryption,
      isHidden: Boolean(body.isHidden ?? false)
    };
  } else if (type === "url") {
    const url = String(body.url ?? "").trim();
    if (!url) throw createError({ statusCode: 400, statusMessage: "URL is required" });
    payload = { url };
  } else if (type === "text") {
    const text = String(body.text ?? "").trim();
    if (!text) throw createError({ statusCode: 400, statusMessage: "Text is required" });
    payload = { text };
  } else if (type === "vcard") {
    const name = String(body.vcardName ?? "").trim();
    const phone = String(body.vcardPhone ?? "").trim();
    const email = String(body.vcardEmail ?? "").trim();
    const org = String(body.vcardOrg ?? "").trim();
    if (!name && !phone && !email) {
      throw createError({ statusCode: 400, statusMessage: "Name, phone or email is required" });
    }
    payload = { name, phone, email, org };
  } else if (type === "email") {
    const email = String(body.email ?? "").trim();
    if (!email) throw createError({ statusCode: 400, statusMessage: "Email is required" });
    payload = {
      email,
      subject: String(body.emailSubject ?? "").trim(),
      body: String(body.emailBody ?? "").trim()
    };
  } else if (type === "sms") {
    const phone = String(body.smsPhone ?? "").trim();
    if (!phone) throw createError({ statusCode: 400, statusMessage: "Phone number is required" });
    payload = { phone, body: String(body.smsBody ?? "").trim() };
  } else if (type === "tel") {
    const phone = String(body.telPhone ?? "").trim();
    if (!phone) throw createError({ statusCode: 400, statusMessage: "Phone number is required" });
    payload = { phone };
  } else {
    const lat = parseNum(body.geoLat);
    const lng = parseNum(body.geoLng);
    payload = { lat, lng };
  }
  const { data, labelLines, filename } = buildQrPayload(type, payload);
  const style = body.style ?? void 0;
  const buffer = await composeImageBuffer(data, style, labelLines);
  setResponseHeader(event, "Content-Type", "image/png");
  setResponseHeader(event, "Content-Disposition", `inline; filename="${filename}.png"`);
  return buffer;
});

export { generate_post as default };
//# sourceMappingURL=generate.post.mjs.map
