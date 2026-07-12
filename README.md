# Choudhary Property

A premium, responsive real-estate website built with Next.js, TypeScript, Tailwind CSS, Prisma and PostgreSQL.

## Run locally

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to a PostgreSQL database.
3. Create the database schema: `npm run db:push`
4. Start the app: `npm run dev`

The site opens at `http://localhost:3000`. The public property catalogue uses local seed-like display data in `src/data/properties.ts`; replace this with Prisma queries as soon as production listings are added.

## Production setup

Set `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` in Vercel, then run `npx prisma db push` against the production PostgreSQL database before deploying. Vercel will run `npm run build` automatically. To use the admin route securely in production, add authentication (for example, Auth.js) and protect `/admin` with middleware.

## Included

- Responsive home, property catalogue, detail, contact and admin-preview pages
- Search and filter UI, WhatsApp/call actions, form validation and inquiry API
- Prisma models for users, properties and inquiries
- Metadata, Open Graph tags, sitemap, robots and local-business-ready content
- Project-bound AI-generated premium hero asset at `public/images/hero-estate.png`
