# Heelix React + Ionic Universal App

A universal Heelix application built with React for web and Ionic React for mobile, using Nx for monorepo management. This project demonstrates a code-sharing strategy where web and mobile apps share components and business logic while using platform-optimized routing solutions.

## Architecture Overview

This monorepo contains:
- **apps/web**: Web application using React Router v6
- **apps/mobile**: Mobile application using Ionic React with Capacitor
- **libs/shared**: Shared components, utilities, and business logic

## Why This Architecture?

### React Router (React) for Web

**Pros:**
- ✅ **Native Web Performance**: React Router is designed specifically for web applications, providing optimal performance and SEO capabilities
- ✅ **Browser History API**: Full support for browser history, back/forward buttons, and deep linking
- ✅ **Lightweight**: Minimal overhead compared to mobile-focused routing solutions
- ✅ **Rich Ecosystem**: Extensive middleware, plugins, and community support
- ✅ **Server-Side Rendering (SSR)**: Can be easily extended to support Next.js or Remix for SSR capabilities
- ✅ **URL Management**: Clean, shareable URLs that work perfectly with web standards
- ✅ **Developer Experience**: Excellent TypeScript support and developer tools

**Cons:**
- ❌ **No Native Mobile Features**: Doesn't provide native mobile navigation patterns (tabs, modals, etc.)
- ❌ **Limited Mobile Gestures**: No built-in support for swipe gestures, pull-to-refresh, etc.
- ❌ **No Native Animations**: Web animations may not feel as smooth as native mobile transitions

### Ionic React for Mobile

**Pros:**
- ✅ **Native-Like Experience**: Provides native mobile UI components and navigation patterns
- ✅ **Cross-Platform**: Write once, deploy to iOS, Android, and PWA
- ✅ **Capacitor Integration**: Seamless access to native device features (camera, GPS, notifications, etc.)
- ✅ **Mobile-Optimized Routing**: Ionic React Router handles mobile-specific navigation patterns (tabs, modals, side menus)
- ✅ **Platform Adaptations**: Automatically adapts UI to iOS and Android design guidelines
- ✅ **Performance**: Optimized for mobile devices with lazy loading and efficient rendering
- ✅ **Rich Component Library**: Pre-built components that follow platform conventions

**Cons:**
- ❌ **Larger Bundle Size**: Ionic adds significant overhead compared to plain React
- ❌ **Learning Curve**: Requires understanding Ionic-specific concepts and patterns
- ❌ **Web Limitations**: While it works on web, it's optimized for mobile and may feel heavy for web-only use cases
- ❌ **Dependency on Ionic Router**: Tied to Ionic's routing solution, which has specific version requirements

## React Router v7 Limitation

**Why we can't use React Router v7:**

Ionic React Router (`@ionic/react-router`) currently requires React Router v6 as a peer dependency. React Router v7 introduces breaking changes in its API and architecture that are not yet compatible with Ionic React Router.

**Current Status:**
- React Router v6: ✅ Fully supported by Ionic React Router
- React Router v7: ❌ Not yet supported (as of current Ionic React versions)

**Impact:**
- The web app uses React Router v6 to maintain consistency across the monorepo
- When Ionic React Router adds support for React Router v7, we can upgrade both apps simultaneously
- This ensures both web and mobile apps share the same routing library version, simplifying maintenance

**Future Considerations:**
- Monitor Ionic React Router releases for v7 support
- Consider migration path when v7 support becomes available
- Evaluate if v7 features justify the migration effort

## Project Structure

```
heelix-react-and-ionic/
├── apps/
│   ├── web/              # Web application (React Router v6)
│   └── mobile/           # Mobile application (Ionic + Capacitor)
├── libs/
│   └── shared/           # Shared components and utilities
├── nx.json               # Nx workspace configuration
├── package.json          # Root package.json
└── tsconfig.base.json    # Base TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) iOS development: Xcode and CocoaPods
- (Optional) Android development: Android Studio

### Install Dependencies

```bash
npm install
```

### Development

#### Web App
```bash
npm run serve:web
# or
nx serve web
```

The web app will be available at `http://localhost:4200`

#### Mobile App
```bash
npm run serve:mobile
# or
nx serve mobile
```

The mobile app will be available at `http://localhost:4201`

### Build

```bash
# Build web app
nx build web

# Build mobile app
nx build mobile
```

### Mobile Development with Capacitor

1. **Build the mobile app first:**
   ```bash
   nx build mobile
   ```

2. **Sync with Capacitor:**
   ```bash
   npx cap sync
   ```

3. **Open in native IDE:**
   ```bash
   # iOS
   npx cap open ios
   
   # Android
   npx cap open android
   ```

## Pages

- **Dashboard**: Insights dashboard with team metrics, vibe scores, and KPIs
- **Factor Analysis**: Detailed factor analysis view with team-specific data

## Shared Components

The `libs/shared` library contains reusable components used by both web and mobile:

- **Card**: Reusable card component for content containers
- **Gauge**: Vibe score gauge visualization
- **ProgressBar**: Progress bar component for metrics
- **Navigation**: Web navigation component (desktop/tablet)
- **MobileNavigation**: Mobile navigation component using Ionic components
- **TakeActionModal**: Modal component for taking actions

## Code Sharing Strategy

### What's Shared
- ✅ Business logic and utilities
- ✅ Data models and types
- ✅ UI components (with platform-specific styling)
- ✅ Constants and configuration

### What's Platform-Specific
- ⚠️ Routing (React Router vs Ionic React Router)
- ⚠️ Navigation components (web nav vs mobile nav)
- ⚠️ Page layouts (web-optimized vs mobile-optimized)
- ⚠️ Styling (CSS variables shared, but platform-specific layouts)

## Technologies

- **React 18**: UI library
- **React Router v6**: Web routing (v7 not yet supported by Ionic)
- **Ionic React**: Mobile UI framework
- **Capacitor**: Native runtime for mobile apps
- **Nx**: Monorepo tooling and build system
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server

## Development Tips

1. **Shared Code Changes**: When modifying shared components, both web and mobile apps will reflect changes immediately
2. **Platform Testing**: Always test on both web and mobile to ensure consistent behavior
3. **Ionic Components**: Use Ionic components in mobile app for native-like experience
4. **Web Components**: Use standard React components in web app for optimal web performance

## Future Enhancements

- [ ] Add React Router v7 support when Ionic React Router supports it
- [ ] Implement server-side rendering for web app
- [ ] Add more shared utilities and hooks
- [ ] Enhance mobile-specific features (push notifications, offline support)
- [ ] Add E2E testing with Playwright/Cypress

## License

MIT
