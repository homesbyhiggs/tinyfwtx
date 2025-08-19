# Tiny Home Landing (Hugo)

A single-page Hugo site for your Fort Worth tiny home community. Drop-in ready and easy to host on Cloudflare Pages.

## Quick start
```bash
# Inside an empty folder
hugo new site .
# (You can skip this if you're unzipping the provided project)
```

Copy these files into your project (or unzip the archive). Then:

```bash
hugo server -D
# open http://localhost:1313
```

Edit `config.toml` to set:
- `params.typeform_url` — your Typeform join link (integrated with Klaviyo on the Typeform side)
- `params.consult_url` — your booking link (Calendly/etc.)
- `params.brand`, contact info, and map link

## Deploy to Cloudflare Pages
- Build command: `hugo`
- Output directory: `public`
- Connect your Git repo and push.

## File map
```
.
├── assets/css/main.css                 # Styles (Hugo Pipes → minify+fingerprint)
├── content/_index.md                   # Landing page front matter
├── layouts/_default/baseof.html        # Shared layout
├── layouts/landing.html                # Landing content
├── config.toml                         # Site config and params
└── README.md
```

## Customization ideas
- Replace the hero copy and button labels to match your brand voice.
- Add images to `/static/images` and reference them in the hero/sections.
- Add a `/content/faq/_index.md` if you want a dedicated FAQ page later.
