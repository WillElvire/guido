import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.guide',
  appName: 'guide',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
