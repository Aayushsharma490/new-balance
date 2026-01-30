# Project Architecture

## Overview
This New Balance e-commerce platform follows a modern, scalable architecture using Next.js 14 App Router with TypeScript and Tailwind CSS.

## Technology Decisions

### Frontend Framework: Next.js 14
- **App Router**: Latest routing paradigm with server components
- **Server Components**: Improved performance and SEO
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Route Handlers**: Built-in API routes

### State Management: Zustand
- **Lightweight**: Only 1KB gzipped
- **Simple API**: Easy to learn and use
- **TypeScript Support**: Full type safety
- **Persistence**: LocalStorage integration for cart/wishlist

### Styling: Tailwind CSS
- **Utility-First**: Rapid development
- **Responsive**: Mobile-first breakpoints
- **Customizable**: Extended with custom colors and fonts
- **Performance**: Purged unused CSS in production

### Animations: Framer Motion
- **Declarative**: Easy-to-read animation code
- **Performance**: GPU-accelerated transforms
- **Spring Physics**: Natural, realistic motion
- **Scroll Animations**: Viewport-based triggers

## Data Flow

```
User Interaction
    ↓
React Component
    ↓
Zustand Store (if state change)
    ↓
LocalStorage (persistence)
    ↓
UI Update
```

## Component Structure

### Layout Components
- **Header**: Navigation, cart, auth status
- **Footer**: Links, newsletter, social media

### Page Components
- **Homepage**: Hero, brand story, categories, products
- **Products**: Listing, filtering, search
- **Product Detail**: Images, specs, reviews, add to cart
- **Checkout**: Multi-step form with validation
- **Account**: Order history, profile management
- **Admin**: Dashboard, product/order management

### Shared Components (shadcn/ui)
- Button, Card, Input, Select
- Dialog, Sheet, Tabs
- Toast notifications

## State Management

### Cart Store (`lib/store/cart.ts`)
```typescript
interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  total: number
}
```

### Wishlist Store (`lib/store/wishlist.ts`)
```typescript
interface WishlistState {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  isInWishlist: (id: number) => boolean
}
```

### Auth Store (`lib/store/auth.ts`)
```typescript
interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
  signup: (data: SignupData) => void
}
```

### Orders Store (`lib/store/orders.ts`)
```typescript
interface OrdersState {
  orders: Order[]
  createOrder: (order: OrderData) => void
  getOrderById: (id: string) => Order | undefined
  getUserOrders: (userId: string) => Order[]
}
```

## Routing Structure

```
/                           # Homepage
/products                   # Product listing
/products/[id]             # Product detail
/about                     # About page
/checkout                  # Checkout flow
/account                   # User account
/account/orders            # Order history
/wishlist                  # Wishlist
/admin                     # Admin dashboard
/admin/products            # Product management
/admin/orders              # Order management
```

## Performance Optimizations

### Image Optimization
- Next.js Image component
- WebP format with fallbacks
- Responsive sizes
- Lazy loading
- CDN delivery (New Balance Scene7)

### Code Splitting
- Route-based automatic splitting
- Dynamic imports for heavy components
- Tree-shaking unused code

### Caching Strategy
- Static pages: ISR (Incremental Static Regeneration)
- Dynamic pages: Server-side rendering
- API routes: Cache headers

### Bundle Size
- Tailwind CSS purging
- Framer Motion tree-shaking
- Minimal dependencies

## Security Considerations

### Current Implementation (Demo)
- Client-side auth (localStorage)
- No sensitive data storage
- Demo payment flow

### Production Recommendations
- Implement NextAuth.js
- Use secure HTTP-only cookies
- Add CSRF protection
- Implement rate limiting
- Use environment variables
- Add security headers
- Validate all inputs
- Sanitize user data

## Scalability

### Current Capacity
- Handles 1000+ products
- Supports multiple categories
- Efficient state management

### Future Scaling
- Add database (PostgreSQL/MongoDB)
- Implement Redis caching
- Use CDN for static assets
- Add search service (Algolia/Elasticsearch)
- Implement queue system for orders
- Add monitoring (Sentry, LogRocket)

## Deployment Architecture

```
User Request
    ↓
Vercel Edge Network (CDN)
    ↓
Next.js Server (Serverless Functions)
    ↓
[Future] Database (PostgreSQL)
    ↓
[Future] Redis Cache
    ↓
Response to User
```

## Development Workflow

1. **Local Development**
   - `npm run dev` - Start dev server
   - Hot reload enabled
   - TypeScript checking

2. **Code Quality**
   - ESLint for linting
   - TypeScript for type safety
   - Prettier for formatting (recommended)

3. **Testing** (Recommended for production)
   - Jest for unit tests
   - React Testing Library
   - Playwright for E2E tests

4. **Deployment**
   - Push to GitHub
   - Vercel auto-deploys
   - Preview deployments for PRs

## Future Enhancements

### Backend Integration
- PostgreSQL database
- Prisma ORM
- NextAuth.js authentication
- Stripe payment processing

### Features
- Real-time inventory
- Email notifications
- Advanced search (Algolia)
- Product recommendations
- User reviews system
- Live chat support

### Performance
- Service worker for offline support
- Progressive Web App (PWA)
- Advanced caching strategies
- Image optimization pipeline

### Analytics
- Google Analytics
- Conversion tracking
- A/B testing
- User behavior analytics
