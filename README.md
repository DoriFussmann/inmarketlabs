# In Market Lab — Production Source Export

This archive contains the complete runnable source for the published In Market Lab website captured from `https://marketlab-gforg59z.manus.space/` on September 15, 2026.

## Requirements

- Node.js 22 or newer
- pnpm 10

## Install and run locally

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The development server listens on the host and port printed by Vite.

## Production build

```bash
pnpm build
pnpm start
```

The build command writes the production frontend to `dist/public` and the server bundle to `dist/index.js`. The production server uses `PORT=3000` unless another `PORT` environment variable is provided.

## Assets

All images used by the website are included in `client/public/manus-storage/` under the exact URL paths referenced by the application source. No external asset migration is required.

## Notes

The export excludes generated dependencies, build output, version-control history, development logs, and Manus hosting metadata. These are not source requirements and are recreated or supplied by the target environment. No DNS or deployment changes were performed when creating this archive.
