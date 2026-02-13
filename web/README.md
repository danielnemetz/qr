# WiFi-QR Web Interface

Browser-basiertes Tool zum Erstellen von gestalteten QR-Codes. Unterstützt mehrere QR-Typen (Wi‑Fi, URL, Text, Kontakt, E-Mail, SMS, Telefon, Standort) mit Live-Vorschau und anpassbarem Stil.

## Starten

```bash
# Im Projektroot
pnpm dev:web

# Oder im web-Ordner
cd web && pnpm dev
```

Die App läuft standardmäßig unter [http://localhost:3000](http://localhost:3000).

## Produktion bauen

```bash
cd web && pnpm build
```

Vorschau des Builds: `pnpm preview`.

## QR-Typen

Die Auswahl ist alphabetisch sortiert; der erste Eintrag ist der Standard beim Aufruf von `/`.

| Typ    | Route   | Inhalt / Formular |
|--------|---------|-------------------|
| E-Mail | `/email` | E-Mail-Adresse, optional Betreff und Nachricht → `mailto:...` |
| Standort | `/geo` | Breiten- und Längengrad → `geo:lat,lng` |
| SMS    | `/sms`  | Telefonnummer, optional Nachricht → `sms:...?body=...` |
| Telefon | `/tel` | Telefonnummer → `tel:...` |
| Text   | `/text` | Freitext (mehrzeilig) |
| URL    | `/url`  | Webadresse |
| Kontakt (vCard) | `/vcard` | Name, Telefon, E-Mail, optional Organisation → vCard 3.0 |
| Wi‑Fi  | `/wifi` | SSID, Verschlüsselung, Passwort, verstecktes Netzwerk → `WIFI:S:...;T:...;P:...;;` |

Mindestangaben pro Typ: Bei vCard mindestens Name, Telefon oder E-Mail; bei Standort beide Koordinaten; bei allen anderen mindestens das jeweilige Pflichtfeld.

## Routing

- **Direktaufruf:** Eine URL wie `/url` oder `/wifi` lädt die Seite mit dem passenden Typ vorausgewählt.
- **Typ wechseln:** Die Auswahl im Dropdown ändert die URL (z. B. auf „URL“ wechseln → `/url`). Browser-Zurück/-Vor funktioniert.
- **Root:** Aufruf von `/` leitet auf den Standard-Typ um (z. B. `/email`).

## Oberfläche

- **Linke Spalte:** QR-Typ (Dropdown) und das zum Typ passende Formular.
- **Mitte:** Live-Vorschau des generierten Bildes und Button „PNG herunterladen“.
- **Rechte Spalte (Stil):** Farben (Hintergrund, Punkte, Ecken, Text), Punkt- und Eckenstil, Bildgröße, Padding, Option „Info-Text anzeigen“.

Nach der ersten Generierung wird bei Änderungen an Inhalt oder Stil automatisch neu generiert (debounced). Dark Mode über den Sonne/Mond-Button oben rechts.

## API

`POST /api/generate` erwartet JSON mit:

- **`type`** — einer der Typen: `wifi`, `url`, `text`, `vcard`, `email`, `sms`, `tel`, `geo`
- **typspezifische Felder** (z. B. `ssid`/`encryption`/`password`/`isHidden` bei `wifi`, `url` bei `url`, `text` bei `text`, usw.)
- optional **`style`** — Overrides für Farben, `dotsType`, `cornersSquareType`, `cornersDotType`, `imageSize`, `qrMargin`, `showInfoInImage`

Antwort: PNG-Buffer (`Content-Type: image/png`).

## Tech Stack

- **Nuxt 4** (Vue 3, Vite)
- **Nitro** (API-Routes, z. B. `/api/generate`)
- **Tailwind CSS v4**, **shadcn-vue** (Reka UI), **lucide-vue-next**
- **@nuxtjs/color-mode** für Dark Mode
- Gemeinsame Logik und Typen aus dem Root-`src/` (z. B. `composeImageBuffer`, `buildWifiString`, `payloads.ts`)
