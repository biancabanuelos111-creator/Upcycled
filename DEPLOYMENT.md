# Artisan Furniture Creations - Deployment Guide

## Prerequisites

Before deploying the application, ensure you have:
- Node.js 18+ installed
- PostgreSQL database (or use a managed service like Supabase, Neon, or Railway)
- OpenAI API key (required for AI features)
- Stripe account (for future payment integration)
- Email service account (Resend or SendGrid)
- Image storage service (Cloudinary or Vercel Blob)

## Environment Setup

### 1. Database Setup

#### Using Supabase (Recommended for beginners)
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Copy the PostgreSQL connection string
4. Add to `.env`:
   ```
   DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```

#### Using Neon (Serverless Postgres)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to `.env`

#### Using Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database: `createdb upcycled`
3. Add to `.env`:
   ```
   DATABASE_URL="postgresql://localhost:5432/upcycled"
   ```

### 2. Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations to create tables
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### 3. Get API Keys

#### OpenAI API Key (Required for AI features)
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account or sign in
3. Go to API keys section
4. Create a new API key
5. Add to `.env`:
   ```
   OPENAI_API_KEY="sk-your-key-here"
   ```

#### Stripe (For payments)
1. Sign up at [stripe.com](https://stripe.com)
2. Get test keys from Dashboard
3. Add to `.env`:
   ```
   STRIPE_SECRET_KEY="sk_test_your-key"
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_your-key"
   ```

#### Resend (For emails)
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Add to `.env`:
   ```
   RESEND_API_KEY="re_your-key"
   ```

#### Cloudinary (For images)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get credentials from dashboard
3. Add to `.env`:
   ```
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

### 4. NextAuth Configuration

Generate a secret for NextAuth:
```bash
openssl rand -base64 32
```

Add to `.env`:
```
NEXTAUTH_SECRET="generated-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

## Deployment to Vercel

### 1. Prepare for Deployment

```bash
# Ensure everything builds successfully
npm run build

# Run linting
npm run lint
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option B: Using Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click Deploy

### 3. Configure Environment Variables in Vercel

In your Vercel project settings:
1. Go to Settings > Environment Variables
2. Add all variables from `.env.example`
3. Set for Production, Preview, and Development environments

### 4. Update NEXTAUTH_URL

After deployment, update `NEXTAUTH_URL`:
```
NEXTAUTH_URL="https://your-site.vercel.app"
```

### 5. Connect Database

Update `DATABASE_URL` to your production database.

**Important**: Don't use your local database for production!

## Deployment to Other Platforms

### Railway

1. Sign up at [railway.app](https://railway.app)
2. Create a new project
3. Add PostgreSQL database
4. Add your GitHub repo
5. Configure environment variables
6. Deploy

### Render

1. Sign up at [render.com](https://render.com)
2. Create a PostgreSQL database
3. Create a new Web Service
4. Connect your GitHub repo
5. Set build command: `npm run build`
6. Set start command: `npm start`
7. Configure environment variables
8. Deploy

### DigitalOcean App Platform

1. Create an account at [digitalocean.com](https://digitalocean.com)
2. Go to App Platform
3. Create a new app from GitHub
4. Add a managed PostgreSQL database
5. Configure environment variables
6. Deploy

## Post-Deployment Steps

### 1. Test the Application

- Visit your deployed URL
- Test homepage loads correctly
- Try navigating to all sections
- Test admin dashboard access at `/admin`
- Try the AI product upload at `/admin/products/new`

### 2. Set Up Domain (Optional)

#### Vercel:
1. Go to Settings > Domains
2. Add your custom domain
3. Configure DNS settings as shown

#### Other platforms:
Follow their domain setup guides

### 3. Configure Email Sending

Test email functionality:
- Order confirmations
- Bespoke request notifications
- Newsletter signups

### 4. Set Up Database Backups

Most managed database services include automatic backups:
- **Supabase**: Automatic daily backups
- **Neon**: Point-in-time restore
- **Railway**: Automatic snapshots

### 5. Monitor Application

- Set up error tracking (e.g., Sentry)
- Monitor API usage (OpenAI)
- Track Stripe transactions
- Monitor database performance

## Troubleshooting

### Build Errors

**"Module not found" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npx prisma generate
npm run build
```

### Database Connection Issues

**"Can't reach database" error:**
- Check DATABASE_URL is correct
- Verify database is running
- Check firewall/network settings
- For managed databases, check IP allowlists

### OpenAI API Errors

**"Missing credentials" error:**
- Verify OPENAI_API_KEY is set correctly
- Check API key is active
- Verify you have API credits

**Rate limit errors:**
- Upgrade OpenAI plan
- Implement request queuing
- Add retry logic

### Vercel Deployment Issues

**Environment variables not working:**
- Redeploy after adding variables
- Check variable names match exactly
- Ensure no spaces in variable names

**Build timeout:**
- Optimize dependencies
- Use build cache
- Consider upgrading Vercel plan

## Security Checklist

- [ ] All environment variables are set in production
- [ ] `NEXTAUTH_SECRET` is a strong, unique value
- [ ] Database credentials are secure
- [ ] API keys are not committed to git
- [ ] CORS is properly configured
- [ ] Rate limiting is implemented
- [ ] Input validation is in place
- [ ] SQL injection protection (via Prisma)
- [ ] XSS protection enabled

## Performance Optimization

### 1. Enable Caching

```javascript
// In next.config.ts
export default {
  // ... other config
  images: {
    domains: ['res.cloudinary.com'],
  },
}
```

### 2. Optimize Images

Use Next.js Image component (already implemented):
```jsx
<Image src="..." alt="..." width={500} height={500} />
```

### 3. Database Optimization

```bash
# Add database indexes
npx prisma migrate dev --name add_indexes
```

### 4. Enable Compression

Vercel enables this automatically. For other hosts:
```javascript
// middleware.ts
export function middleware(request) {
  // Add compression
}
```

## Monitoring and Analytics

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)
   - Built-in performance monitoring
   - Web vitals tracking

2. **Sentry** (Error tracking)
   ```bash
   npm install @sentry/nextjs
   ```

3. **Google Analytics**
   - Add tracking script to `app/layout.tsx`

4. **Stripe Dashboard**
   - Monitor payments
   - Track refunds

5. **OpenAI Usage Dashboard**
   - Monitor API usage
   - Track costs

## Maintenance

### Regular Tasks

**Weekly:**
- Review error logs
- Check database size
- Monitor API usage costs

**Monthly:**
- Update dependencies: `npm update`
- Review and optimize database
- Check for security updates

**Quarterly:**
- Full backup of database
- Review and update documentation
- Security audit

## Scaling Considerations

### When to Scale

- More than 1000 daily visitors
- Slow API response times
- Database query slowdowns
- High error rates

### Scaling Strategies

1. **Database**: Upgrade to larger instance or add read replicas
2. **API**: Implement caching layer (Redis)
3. **Images**: Use CDN (Cloudinary provides this)
4. **Serverless**: Vercel scales automatically
5. **Search**: Add Algolia or Elasticsearch

## Support

For issues:
1. Check this deployment guide
2. Review the main README.md
3. Check Next.js documentation
4. Review Prisma documentation
5. Check OpenAI API documentation

## Success!

Your Artisan Furniture Creations platform is now live! 🎉

Next steps:
1. Add your first product using the AI upload tool
2. Configure email templates
3. Set up payment processing
4. Market your unique furniture platform
5. Support artisan creators!
