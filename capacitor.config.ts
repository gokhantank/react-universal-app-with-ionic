import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.heelix.app',
  appName: 'Heelix',
  webDir: 'dist/apps/mobile',
  server: {
    androidScheme: 'https'
  }
};

export default config;


