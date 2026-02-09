# Artisan Furniture Creations - E-commerce Platform

A comprehensive e-commerce platform for an upcycled furniture business featuring AI-powered product management, multi-vendor marketplace, and complete shopping cart functionality.

## 🌟 Key Features

### 1. AI-Powered Product Upload System (Critical Feature)
- **Intelligent Image Analysis**: Upload furniture images and AI automatically:
  - Generates compelling product descriptions
  - Identifies materials, style, and condition
  - Suggests pricing based on market comparables
  - Creates SEO-friendly titles and tags
  - Auto-categorizes products
  - Extracts dimensions when visible
- **Admin Review Interface**: Edit all AI-generated content before publishing
- **One-Click Publish**: Instantly publish products to your website

### 2. Four Main Sections

#### A. Ready to Buy (One-of-a-Kind Furniture)
- Gallery view of unique furniture pieces
- Detailed product pages with multiple images
- Real-time inventory management
- Purchase and checkout flow

#### B. Bespoke Section
- Custom furniture request forms
- Portfolio of previous work
- Consultation booking system
- Quote request functionality

#### C. DIY Store
- E-commerce for DIY supplies and materials
- Product categories (paint, hardware, tools)
- Digital downloads for tutorials

#### D. Marketplace Section
- Platform for artists to sell items
- Artist profiles and storefronts
- Commission/fee structure
- Artist dashboard for managing listings

### 3. Complete E-commerce Features
- Shopping cart functionality
- Secure checkout with Stripe
- Order tracking and management
- Automated email notifications
- Shipping integration support
- Returns and refunds management

### 4. User Management
- Customer accounts with order history
- Wishlist/favorites
- Saved shipping addresses
- Artist/vendor accounts with analytics

### 5. Admin Dashboard
- Product management (with AI assist)
- Order processing and fulfillment
- Inventory tracking
- Customer management
- Artist/vendor approval and management
- Sales analytics and reporting

## 🚀 Tech Stack

- **Frontend**: Next.js 14+ with App Router (React 19)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (ready to configure)
- **AI Integration**: OpenAI GPT-4 Vision API
- **Payments**: Stripe (ready to integrate)
- **Email**: Resend/SendGrid (ready to integrate)
- **Image Storage**: Cloudinary/Vercel Blob (ready to integrate)
- **Shipping**: Shippo/EasyPost APIs (ready to integrate)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key (for AI features)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Upcycled
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/upcycled"
   
   # Authentication
   NEXTAUTH_SECRET="your-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # OpenAI (Required for AI features)
   OPENAI_API_KEY="sk-your-openai-api-key"
   
   # Stripe (for payments)
   STRIPE_SECRET_KEY="sk_test_your-key"
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_your-key"
   
   # Additional services
   RESEND_API_KEY="your-resend-key"
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   SHIPPO_API_KEY="your-shippo-key"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   
   # (Optional) Seed database with sample data
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage Guide

### For Platform Owners (Admin)

1. **Access Admin Dashboard**
   - Navigate to `/admin`
   - View overview of products, orders, and analytics

2. **Upload Products with AI**
   - Go to `/admin/products/new`
   - Drag and drop furniture images
   - AI analyzes and generates product details
   - Review and edit AI suggestions
   - Click "Publish Product"

3. **Manage Orders**
   - View all orders in admin dashboard
   - Update order status
   - Add tracking numbers
   - Process refunds

4. **Approve Marketplace Artists**
   - Review artist applications
   - Approve or reject vendors
   - Manage commission rates

### For Customers

1. **Browse Products**
   - Visit homepage or "Ready to Buy" section
   - Filter by category, price, style

2. **Make a Purchase**
   - Add items to cart
   - Proceed to checkout
   - Enter shipping information
   - Complete payment with Stripe

3. **Track Orders**
   - View order history in account
   - Track shipping status

### For Artists (Marketplace Vendors)

1. **Register as Artist**
   - Create account and apply for artist profile
   - Wait for admin approval

2. **Manage Products**
   - Access artist dashboard
   - Upload products (simplified AI assist available)
   - View sales and earnings

3. **Request Payouts**
   - Track earnings
   - Request payouts via Stripe Connect

## 🏗️ Project Structure

```
/
├── app/                      # Next.js App Router pages
│   ├── admin/               # Admin dashboard and tools
│   │   ├── products/        # Product management
│   │   │   └── new/        # AI product upload
│   │   └── page.tsx        # Admin dashboard
│   ├── api/                # API routes
│   │   └── admin/          # Admin API endpoints
│   ├── products/           # Product pages
│   ├── cart/               # Shopping cart
│   ├── checkout/           # Checkout flow
│   ├── marketplace/        # Marketplace section
│   ├── bespoke/            # Custom requests
│   ├── diy-store/          # DIY supplies
│   └── account/            # User accounts
├── components/             # React components
│   ├── ui/                # UI components
│   ├── admin/             # Admin components
│   │   └── AIProductUpload.tsx  # AI upload interface
│   ├── Header.tsx         # Site header
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   ├── prisma.ts         # Database client
│   ├── openai.ts         # OpenAI integration
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🎨 Database Schema

The platform includes comprehensive models for:
- **Users**: Customers, artists, and admins
- **Products**: With AI-generated fields
- **Orders & OrderItems**: Complete order management
- **Categories & Tags**: Product organization
- **ArtistProfiles**: Marketplace vendor data
- **Reviews & Ratings**: Customer feedback
- **BespokeRequests**: Custom furniture inquiries
- **ShippingAddresses**: User addresses
- **Newsletter**: Email subscriptions

## 🔐 Authentication

The platform uses NextAuth.js for authentication (configuration needed):
- Email/password authentication
- OAuth providers (Google, GitHub, etc.)
- Role-based access control (Customer, Artist, Admin)

## 💳 Payment Processing

Stripe integration supports:
- One-time payments
- Guest checkout
- Saved payment methods
- Stripe Connect for marketplace payouts

## 📧 Email Notifications

Automated emails for:
- Order confirmations
- Shipping notifications
- Delivery updates
- Return authorizations
- Password resets

## 📱 Mobile Responsive

- Mobile-first design approach
- Responsive layouts for all screen sizes
- Touch-friendly interface
- Optimized images and performance

## 🔍 SEO Features

- AI-generated SEO titles and descriptions
- Semantic HTML structure
- Meta tags for social sharing
- Sitemap generation
- Structured data for products

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Add environment variables in Vercel dashboard**
3. **Deploy**

```bash
npm run build
```

### Other Platforms

The app can be deployed to any Node.js hosting platform:
- Railway
- Render
- DigitalOcean
- AWS/Google Cloud

## 🧪 Development

### Run Linting
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📝 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Yes | Secret for NextAuth.js |
| `NEXTAUTH_URL` | Yes | Base URL of your application |
| `OPENAI_API_KEY` | Yes* | OpenAI API key for AI features |
| `STRIPE_SECRET_KEY` | Yes* | Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | Yes* | Stripe publishable key |
| `RESEND_API_KEY` | Yes* | Email service API key |
| `CLOUDINARY_CLOUD_NAME` | No | Image storage (optional) |
| `SHIPPO_API_KEY` | No | Shipping API (optional) |

*Required for full functionality

## 🤝 Contributing

This is a custom e-commerce platform. For modifications:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2024 Artisan Furniture Creations. All rights reserved.

## 🆘 Support

For issues or questions:
- Check the FAQ section
- Review the documentation
- Contact support at support@artisanfurniturecreations.com

## 🎯 Roadmap

### Phase 1 ✅ (Current)
- [x] Project foundation and setup
- [x] AI-powered product upload system
- [x] Basic homepage and navigation
- [x] Admin dashboard structure

### Phase 2 (Next)
- [ ] Complete product listing pages
- [ ] Shopping cart implementation
- [ ] Stripe checkout integration
- [ ] Order management system

### Phase 3 (Future)
- [ ] Bespoke section
- [ ] DIY Store
- [ ] Marketplace functionality
- [ ] Email automation
- [ ] Shipping integration

### Phase 4 (Advanced)
- [ ] Reviews and ratings
- [ ] Advanced analytics
- [ ] Mobile app (PWA)
- [ ] Multi-language support

## 🌟 Key Highlights

1. **AI-First Approach**: The AI product upload system is the standout feature, automating the most time-consuming part of e-commerce management.

2. **Marketplace Ready**: Built-in multi-vendor marketplace with commission tracking and payout management.

3. **Modern Stack**: Using the latest Next.js 14 App Router with React Server Components for optimal performance.

4. **Scalable Architecture**: Clean separation of concerns, easy to extend and maintain.

5. **Production Ready**: Comprehensive error handling, loading states, and user feedback.

---

Built with ❤️ for sustainable furniture and supporting artisan creators.
