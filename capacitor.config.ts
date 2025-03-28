import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appName: 'anidzen',
  appId: 'com.anidzen.app',
  webDir: './dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      // launchAutoHide: true,
      backgroundColor: '#000000',
      // androidSplashResourceName: "Splash",
      // androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashImmersive: true
    }
  }
}

export default config
