# ExifSafe

Free privacy-first image tools that work locally in your browser.

## Features

- Remove common EXIF, GPS and camera metadata locally
- Compress JPG, PNG and WEBP locally
- No upload for supported image operations
- No analytics
- No tracking
- No telemetry
- No cookies
- No account

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

## Privacy Note

ExifSafe is designed so supported image operations happen in the browser. Files are not uploaded
to a server for processing.

ExifSafe intentionally does not include analytics, telemetry, tracking scripts, advertising
pixels, cookies or usage event collection. We do not count visitors or track how people use the
tool.

## Limitations

- Browser-based metadata cleaning removes common metadata by re-exporting from pixel data
- It is not a forensic metadata audit
- Some unusual or proprietary metadata may require advanced tools
- Browser-based compression depends on browser canvas support, file format and image content

## Links

- Website: https://exifsafe.com
- Guides: https://exifsafe.com/guides
- Compressor: https://exifsafe.com/compress-image

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT License
