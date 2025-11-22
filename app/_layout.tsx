import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import Constants from "expo-constants";
import { Stack } from "expo-router";

const convexUrl =
  Constants.expoConfig?.extra?.convexUrl ??
  Constants.manifest?.extra?.convexUrl; // fallback for dev

const convex = new ConvexReactClient(convexUrl);

// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
// unsavedChangesWarning: false,
// });
export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
