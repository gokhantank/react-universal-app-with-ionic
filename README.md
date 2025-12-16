# Heelix React Universal App

A universal Heelix application built with React and React Router, using Capacitor to deploy the same web app to iOS and Android. This project uses Nx for monorepo management and demonstrates a single codebase approach for web and mobile.

## Architecture Overview

This monorepo uses a **single web application** that is wrapped with Capacitor for mobile deployment:

- **apps/web**: Single React application that works on both web and mobile
- **libs/shared**: Shared components, utilities, and business logic
- **Capacitor**: Wraps the web app to create native iOS and Android apps



## Project Structure

```
heelix-react-and-ionic/
├── apps/
│   └── web/              # Single React application (web + mobile via Capacitor)
├── libs/
│   └── shared/           # Shared components and utilities
├── capacitor.config.ts   # Capacitor configuration
├── nx.json               # Nx workspace configuration
├── package.json          # Root package.json
└── tsconfig.base.json    # Base TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- (For iOS) Xcode and CocoaPods
- (For Android) Android Studio

### Install Dependencies

```bash
npm install
```

### Development

#### Web Development
```bash
npm run serve
# or
nx serve web
```

The app will be available at `http://localhost:4200`

### Build

```bash
npm run build
# or
nx build web
```

This builds the web app to `dist/apps/web`, which is then used by Capacitor for mobile deployment.

### Mobile Development with Capacitor

1. **Build the web app first:**
   ```bash
   npm run build
   ```

2. **Sync with Capacitor:**
   ```bash
   npm run cap:sync
   ```
   This command builds the web app and syncs it with Capacitor.

3. **Open in native IDE:**
   ```bash
   # iOS
   npm run cap:open:ios
   
   # Android
   npm run cap:open:android
   ```

4. **Run on device/emulator:**
   - iOS: Use Xcode to run on simulator or device
   - Android: Use Android Studio to run on emulator or device

## Pages

- **Dashboard**: Insights dashboard with team metrics, vibe scores, and KPIs
- **Factor Analysis**: Detailed factor analysis view with team-specific data

## Shared Components

The `libs/shared` library contains reusable components:

- **Card**: Reusable card component for content containers
- **Gauge**: Vibe score gauge visualization
- **ProgressBar**: Progress bar component for metrics
- **Navigation**: Responsive navigation component (works on web and mobile)
- **TakeActionModal**: Modal component for taking actions

## Responsive Design

The app is designed to be responsive and work well on:
- Desktop browsers
- Tablets
- Mobile phones (via Capacitor)
- Progressive Web Apps (PWA)

The navigation and layouts adapt based on screen size using CSS media queries.

## Technologies

- **React 18**: UI library
- **React Router v7**: Modern routing with lazy loading and code splitting
- **Capacitor**: Native runtime for mobile apps
- **Nx**: Monorepo tooling and build system
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server

## Development Tips

1. **Responsive Testing**: Test on different screen sizes to ensure mobile experience is good
2. **Capacitor Plugins**: Add Capacitor plugins when you need native device features
3. **Mobile Optimizations**: Consider touch-friendly button sizes and mobile-specific interactions
4. **PWA**: The app can also be deployed as a PWA for offline support

## Capacitor Plugins Available

The following Capacitor plugins are included and ready to use:
- `@capacitor/app`: App lifecycle and URL handling
- `@capacitor/haptics`: Haptic feedback
- `@capacitor/keyboard`: Keyboard management
- `@capacitor/status-bar`: Status bar customization

Add more plugins as needed:
```bash
npm install @capacitor/camera
npm install @capacitor/geolocation
# etc.
```

## Future Enhancements

- [ ] Upgrade to React Router v6 or v7 when ready
- [ ] Add more Capacitor plugins for native features
- [ ] Implement Progressive Web App (PWA) features
- [ ] Add offline support
- [ ] Enhance mobile-specific interactions and gestures
- [ ] Add E2E testing with Playwright/Cypress

## License

MIT
