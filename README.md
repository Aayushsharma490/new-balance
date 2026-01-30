# 🏃‍♂️ New Balance E-Commerce Platform

A modern, high-performance e-commerce platform built with Next.js 14, featuring stunning animations, real product images, and a complete shopping experience.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Render-46E3B7?style=for-the-badge&logo=render)](https://new-balance.onrender.com)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

## 🌐 Live Demo

**🚀 Visit the live site**: [https://new-balance.onrender.com](https://new-balance.onrender.com)

## ✨ Features

### 🎨 **Visual Excellence**
- **Real Product Images**: Official New Balance CDN images for all products
- **Advanced Animations**: Framer Motion with spring physics, parallax scrolling, and 3D transforms
- **Mobile Responsive**: Fully optimized for all screen sizes (sm/md/lg breakpoints)
- **Dark Mode Ready**: Beautiful color schemes with gradient backgrounds

### 🛍️ **E-Commerce Functionality**
- **Shopping Cart**: Full cart management with Zustand state
- **Wishlist**: Save favorite products
- **Multi-Step Checkout**: Shipping, payment, and order review
- **Order History**: Track all orders with status updates
- **Product Categories**: Men's, Women's, and Kids' collections
- **Search & Filters**: Advanced product filtering and search

### 🔐 **User Management**
- **Demo Authentication**: Login/Signup with local storage (hackathon-ready)
- **User Profiles**: Account management and order tracking
- **Guest Checkout**: Shop without creating an account

### 📊 **Admin Dashboard**
- Product management interface
- Order tracking and status updates
- Customer analytics
- Sales statistics

### 🎭 **Premium Animations**
- **Timeline**: Animated line drawing with pulsing dots
- **Product Cards**: Hover zoom, rotation, and scale effects
- **Category Sections**: Staggered entrance animations
- **Parallax Effects**: Scroll-based image movements
- **Icon Rotations**: 360° spins on hover
- **Spring Physics**: Natural, bouncy transitions

## 🏗️ Architecture

```
new-balance-redesign/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── about/             # About page
│   │   ├── account/           # User account & order history
│   │   ├── admin/             # Admin dashboard
│   │   ├── checkout/          # Multi-step checkout
│   │   ├── products/          # Product listing & details
│   │   ├── wishlist/          # Wishlist page
│   │   └── page.tsx           # Homepage
│   │
│   ├── components/
│   │   ├── home/              # Homepage sections
│   │   │   ├── hero.tsx              # Hero with GIF & product image
│   │   │   ├── brand-story.tsx       # Timeline & company history
│   │   │   ├── scroll-video.tsx      # Scroll-controlled animation
│   │   │   ├── category-sections.tsx # Men/Women/Kids sections
│   │   │   └── featured-products.tsx # Product showcase
│   │   │
│   │   ├── layout/            # Shared layout components
│   │   │   ├── header.tsx            # Navigation with auth
│   │   │   └── footer.tsx            # Footer with links
│   │   │
│   │   └── ui/                # Reusable UI components (shadcn)
│   │
│   ├── lib/
│   │   ├── store/             # Zustand state management
│   │   │   ├── cart.ts               # Shopping cart
│   │   │   ├── wishlist.ts           # Wishlist
│   │   │   ├── auth.ts               # Authentication
│   │   │   └── orders.ts             # Order management
│   │   │
│   │   └── utils.ts           # Utility functions
│   │
│   └── styles/
│       └── globals.css        # Global styles & Tailwind
│
├── public/                    # Static assets
│   └── Whisk_*.gif           # Hero GIF animation
│
└── Configuration Files
    ├── next.config.ts         # Next.js configuration
    ├── tailwind.config.ts     # Tailwind CSS setup
    ├── tsconfig.json          # TypeScript config
    └── package.json           # Dependencies
```

## 🚀 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 14.x |
| **TypeScript** | Type-safe development | 5.x |
| **Tailwind CSS** | Utility-first styling | 3.x |
| **Framer Motion** | Advanced animations | 11.x |
| **Zustand** | State management | 4.x |
| **shadcn/ui** | UI component library | Latest |
| **Lucide React** | Icon library | Latest |

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Aayushsharma490/new-balance.git
cd new-balance
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🎯 Key Features Breakdown

### 1. **Category Sections** (Men/Women/Kids)
- **9 Real Product Images** from New Balance CDN
- **Color-Coded Gradients**: Blue (Men), Pink (Women), Green (Kids)
- **Mobile Responsive**: Grid adapts from 1 to 3 columns
- **Stagger Animations**: Products animate in sequence

### 2. **Enhanced Timeline**
- **Line Drawing Effect**: Animates from top to bottom
- **Pulsing Dots**: Ripple effect on timeline markers
- **Card Reveals**: Spring-based entrance animations
- **Icon Rotations**: Emoji icons spin into view
- **Mobile Layout**: Left-aligned on mobile, centered on desktop

### 3. **Product Pages**
- **8 Products** with real New Balance images
- **Wishlist Heart Button**: Appears on hover
- **Image Zoom & Rotation**: 3D transform on hover
- **Grid/List View Toggle**: Switch between layouts
- **Advanced Filters**: Category, price range, search

### 4. **Shopping Experience**
- **Cart Management**: Add, remove, update quantities
- **Persistent State**: Zustand with localStorage
- **Order Creation**: Full checkout flow
- **Order Tracking**: View order history and status

## 🎨 Design System

### Color Palette
```css
Primary Red: #DC2626 (red-600)
Men's Blue: #2563EB → #1E40AF (blue-600 to blue-800)
Women's Pink: #DB2777 → #6B21A8 (pink-600 to purple-800)
Kids' Green: #059669 → #0F766E (green-600 to teal-800)
Dark Gray: #111827 → #1F2937 (gray-900 to gray-800)
```

### Typography
- **Display Font**: System font stack for headings
- **Body Font**: Inter, system-ui, sans-serif
- **Sizes**: Responsive (text-sm → sm:text-base → lg:text-lg)

### Animations
- **Duration**: 0.3s - 0.8s for most transitions
- **Easing**: Spring physics for natural movement
- **Delays**: Staggered (0.1s - 0.2s intervals)

## 📱 Mobile Responsiveness

### Breakpoints
- **sm**: 640px (Small devices)
- **md**: 768px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large)

### Mobile Optimizations
- Touch-friendly buttons (min 44px height)
- Simplified navigation
- Optimized image sizes
- Reduced animation complexity
- Stack layouts on small screens

## 🔧 Configuration

### Environment Variables (Optional)
Create a `.env.local` file for production features:

```env
# Database (for production)
DATABASE_URL=your_database_url

# Authentication (for production)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Email (for notifications)
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@example.com
```

## 🚢 Deployment

### Live Production Site
**🌐 URL**: [https://new-balance.onrender.com](https://new-balance.onrender.com)
**Platform**: Render
**Status**: ✅ Live and Running

### Render Deployment
The application is currently deployed on Render with automatic deployments from the GitHub repository.

**Features**:
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ CDN integration
- ✅ Zero-downtime deployments

### Vercel (Alternative)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
- **Netlify**: Configure build command `npm run build`
- **Railway**: Auto-deploy from GitHub
- **AWS/GCP**: Use Docker or static export

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Bundle Size**: Optimized with tree-shaking

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aayush Sharma**
- GitHub: [@Aayushsharma490](https://github.com/Aayushsharma490)
- Repository: [new-balance](https://github.com/Aayushsharma490/new-balance)
- Live Demo: [https://new-balance.onrender.com](https://new-balance.onrender.com)

## 🙏 Acknowledgments

- **New Balance** for product images (via official CDN)
- **shadcn/ui** for beautiful UI components
- **Framer Motion** for animation capabilities
- **Vercel** for Next.js framework

## 📸 Screenshots

### Homepage
- Hero section with animated GIF
- Brand story timeline
- Category sections (Men/Women/Kids)
- Featured products showcase

### Product Pages
- Grid/List view toggle
- Advanced filtering
- Real product images
- Wishlist integration

### Checkout Flow
- Multi-step process
- Order summary
- Payment integration ready

---

**Built with ❤️ for the hackathon** | **Powered by Next.js 14** | **Production Ready** 🚀
