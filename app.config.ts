import type { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.murattal.app.dev";
  }

  if (IS_PREVIEW) {
    return "com.murattal.app";
  }

  return "com.murattal.app";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Murattal (Dev)";
  }

  if (IS_PREVIEW) {
    return "Murattal (Preview)";
  }

  return "Murattal";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: "adilkhursheed",
  name: getAppName(),
  slug: "murattal",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "murattal",
  userInterfaceStyle: "automatic",
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#000000",
    },
    package: getUniqueIdentifier(),
  },
  updates: {
    url: "https://u.expo.dev/45c4e84f-52b3-420b-9175-ee132494e8d2",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  web: {
    bundler: "metro",
    output: "server",
    favicon: "./assets/images/icon.png",
  },
  plugins: [
    "expo-router",
    "expo-build-properties",
    "expo-background-task",
    "expo-web-browser",
    "expo-asset",
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/noorehidayat-Regular.ttf",
          "./assets/fonts/noorehira-Regular.ttf",
          "./assets/fonts/noorehuda-Regular.ttf",
          "./assets/fonts/Roboto-Bold.ttf",
          "./assets/fonts/Roboto-ExtraBold.ttf",
          "./assets/fonts/Roboto-Medium.ttf",
          "./assets/fonts/Roboto-Regular.ttf",
          "./assets/fonts/Roboto-SemiBold.ttf",
          "./assets/fonts/UthmanTN.ttf",
        ],
      },
    ],
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#000000",
      },
    ],
    [
      "expo-updates",
      {
        username: "murattal",
      },
    ],
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission:
          "Allow Murattal to use your location.",
      },
    ],
    [
      "expo-dev-client",
      {
        launchMode: "most-recent",
      },
    ],
    [
      "expo-audio",
      {
        microphonePermission: "Allow Murattal to access your microphone.",
      },
    ],
    [
      "expo-sensors",
      {
        motionPermission: "Allow Murattal to access your device motion.",
      },
    ],
    [
      "expo-screen-orientation",
      {
        initialOrientation: "DEFAULT",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "45c4e84f-52b3-420b-9175-ee132494e8d2",
    },
  },
});
