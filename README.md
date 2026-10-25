# Vizag Coastline Escapes

I want to upgrade the website vizagarakutourpackages.com; it is currently on WordPress, and I want to create it in Next.js. Create a premium 3D website with clean layouts, a smooth UI, and pro-level animations for the travel agency.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vizag-coastline-escapes.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d37e42e9-4428-4110-860a-ad5412cb963d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Live Google reviews

The homepage can fetch up to five relevant reviews from Google Places API (New), including reviewer profile photos when available. It uses a server function; the API key is never sent to visitors. Until configured, or if Google is unavailable, the existing dated review excerpts remain visible. This is not a full Google Maps review gallery; photos attached to individual reviews are not returned by this API.

1. Enable Places API (New) in your Google Cloud project and configure billing and request quotas.
2. Create an API key restricted to Places API (New); apply server/IP restrictions suitable for your hosting environment.
3. Find the business Place ID with Google's Place ID finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
4. Copy `.env.example` to `.env.local` and fill in `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`. Do not commit the filled file or share the key in chat.
5. Restart the development server. Configure the same server secrets with your hosting provider before deploying. Verify your host exposes secrets through the server runtime's `process.env`.
6. Confirm author photos, profile links, review links, ratings and dates appear. Check the Google Cloud quota dashboard to bound usage.

Review requests are shared between the trust bar and review section during a page visit. There is no persistent storage or scheduled polling of Google content. Profile photo failures fall back to initials. Before public launch, provide your site's public Terms of Use and Privacy Policy incorporating Google's required terms/privacy references, and verify attribution against https://developers.google.com/maps/documentation/places/web-service/policies.
