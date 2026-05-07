import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Noor-e-hidayat-Regular": require("@/assets/fonts/noorehidayat-Regular.ttf"),
    "Noor-e-hira-Regular": require("@/assets/fonts/noorehira-Regular.ttf"),
    "Noor-e-huda-Regular": require("@/assets/fonts/noorehuda-Regular.ttf"),
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-ExtraBold": require("@/assets/fonts/Roboto-ExtraBold.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-SemiBold": require("@/assets/fonts/Roboto-SemiBold.ttf"),
    UthmanTN: require("@/assets/fonts/UthmanTN.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
