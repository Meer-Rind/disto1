# Meridian Supply Co. — Vercel Deployment

## 1. Required environment variables

Create these in Vercel before publishing:

```env
ADMIN_EMAIL=your-private-admin-email@example.com
ADMIN_PASSWORD=use-a-long-unique-password
ADMIN_SESSION_SECRET=use-at-least-32-random-characters
```

Generate a session secret locally with:

```bash
openssl rand -base64 48
```

Never commit `.env.local` or production secrets to Git.

## 2. Deploy with GitHub

1. Create a private GitHub repository.
2. Push this project to the repository.
3. Open https://vercel.com/new.
4. Import the GitHub repository.
5. Confirm **Framework Preset: Next.js**.
6. Leave **Root Directory** as `.`.
7. Leave **Output Directory** empty; Vercel detects Next.js automatically.
8. Add the three environment variables under **Environment Variables** for Production, Preview, and Development as appropriate.
9. Click **Deploy**.

Recommended settings:

- Install command: `npm install`
- Build command: `npm run build`
- Node.js: 20 or newer

## 3. Deploy with the Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Add production secrets:

```bash
vercel env add ADMIN_EMAIL production
vercel env add ADMIN_PASSWORD production
vercel env add ADMIN_SESSION_SECRET production
```

Publish production:

```bash
vercel --prod
```

## 4. Verify after deployment

Check:

- `/`
- `/shop`
- `/admin/login`
- `/api/admin/session`
- Product pages
- Checkout
- Mobile layouts

The administrator login will not accept the development demo credentials in production unless those values are explicitly configured in Vercel.

## Important data limitation

The current mock catalog changes, content changes, orders, customers, applications, RFQs, reviews, and settings use browser `localStorage`. They are private to one browser and are not shared across administrators or visitors.

Before operating this as a real distribution business, connect a database and object storage for shared persistent records, product images, inventory, orders, customer accounts, audit logs, and permissions.
