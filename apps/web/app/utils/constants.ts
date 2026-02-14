export const QR_TYPE_CHOICES = [
  { value: 'email', label: 'Email' },
  { value: 'geo', label: 'Location' },
  { value: 'sms', label: 'SMS' },
  { value: 'tel', label: 'Phone' },
  { value: 'text', label: 'Text' },
  { value: 'url', label: 'URL' },
  { value: 'vcard', label: 'Contact (vCard)' },
  { value: 'wifi', label: 'Wi‑Fi' },
] as const;

export const QR_TYPES_ORDERED = QR_TYPE_CHOICES.map((c) => c.value);
