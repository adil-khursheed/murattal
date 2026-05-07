import { ConfigContext, ExpoConfig } from "expo/config";

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
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
    package: getUniqueIdentifier(),
  },
  updates: {
    url: "https://u.expo.dev/ba943f8c-c156-413d-9fff-22d74d03348c",
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
        username: "al-quran",
      },
    ],
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission:
          "Allow Al-Quran to use your location.",
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
        microphonePermission: "Allow Al-Quran to access your microphone.",
      },
    ],
    [
      "expo-sensors",
      {
        motionPermission: "Allow Al-Quran to access your device motion.",
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
      projectId: "ba943f8c-c156-413d-9fff-22d74d03348c",
    },
  },
});
