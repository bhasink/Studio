# SW Studios - Next.js 14 App Router Boilerplate

A modern, production-ready Next.js 14 application built with the App Router architecture for SW Studios. This project showcases a complete video production studio website with optimized performance, SEO, and modern React patterns.

## 🚀 Features

- **Next.js 14** with App Router architecture
- **Optimized Image Handling** using Next.js Image component
- **Modular Component Structure** for maintainability
- **CSS Modules** for scoped styling
- **SEO Optimized** with proper metadata configuration
- **Responsive Design** for all device sizes
- **Client-side Routing** with dynamic routes
- **Contact Form** with validation
- **Modern Build Pipeline** with optimization

## 📁 Project Structure

```
├── app/                    # App Router pages and layouts
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   ├── globals.css        # Global styles
│   ├── work/              # Work portfolio pages
│   │   ├── layout.jsx     # Work section layout
│   │   ├── page.jsx       # Work listing page
│   │   └── [slug]/        # Dynamic work detail pages
│   └── thanks/            # Thank you page
├── components/            # Reusable React components
│   ├── Header/           # Navigation header
│   ├── Footer/           # Site footer
│   ├── HeroSection/      # Hero video section
│   ├── AboutSection/     # About us section
│   ├── FeaturedWork/     # Featured work showcase
│   ├── ClientBrands/     # Client logos grid
│   └── ContactForm/      # Contact form component
├── public/               # Static assets
│   └── images/          # Image assets
├── src/pages_backup/    # Legacy Pages Router (backup)
└── styles/              # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Studio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_API=your_api_endpoint
   NEXT_PUBLIC_B_API=your_base_api_endpoint
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🎨 Key Components

### Layout Structure
- **Root Layout** (`app/layout.jsx`): Contains global metadata, fonts, and basic HTML structure
- **Page Layouts**: Specific layouts for different sections with their own metadata

### Reusable Components
- **Header**: Navigation with responsive menu and smooth scroll links
- **Footer**: Company information and social links
- **HeroSection**: Video background with overlay content
- **AboutSection**: Company description with animated background
- **FeaturedWork**: Dynamic work showcase with video hover effects
- **ClientBrands**: Animated client logo grid
- **ContactForm**: Validated contact form with API integration

### Styling Approach
- **CSS Modules** for component-specific styles
- **Global CSS** for shared utilities and base styles
- **Responsive Design** with mobile-first approach
- **Modern CSS** with flexbox, grid, and custom properties

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` includes:
- Image optimization settings for external domains
- Webpack configuration for jQuery
- Build optimization settings

### Image Optimization
Images are configured to work with:
- External API domains
- Next.js Image component for automatic optimization
- Proper alt text and responsive sizing

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 480px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 SEO Features

- **Dynamic Metadata**: Page-specific titles and descriptions
- **Open Graph Tags**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Ready for schema.org markup
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚀 Performance Optimizations

- **App Router**: Latest Next.js routing for better performance
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic code splitting per route
- **CSS Optimization**: Minimized and optimized CSS delivery
- **Bundle Analysis**: Ready for bundle size analysis

## 🔄 Migration from Pages Router

This project was successfully migrated from Next.js 13 Pages Router to Next.js 14 App Router:
- Legacy pages moved to `src/pages_backup/`
- New App Router structure implemented
- Components modernized with latest React patterns
- Improved file-based routing system

## 📊 Dependencies

### Core Dependencies
- **Next.js 14.2.0**: React framework
- **React 18.3.0**: UI library
- **Axios**: HTTP client for API calls

### UI & Animation
- **Antd**: UI component library
- **GSAP**: Animation library
- **Swiper**: Touch slider
- **React components**: Various specialized components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to SW Studios.

## 🆘 Support

For support, please contact the SW Studios development team.

---

Built with ❤️ using Next.js 14 and React 18
