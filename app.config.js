import "dotenv/config";

export default {
  expo: {
    name: "Todo App",
    slug: "todo-app-rn",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "todoapprn",
    userInterfaceStyle: "automatic",

    newArchEnabled: true,

    ios: {
      supportsTablet: true,
    },

    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: "com.renuka2003.todoapprn",
    },

    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },

    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
      reactCompiler: false,
    },

    extra: {
      convexUrl: process.env.EXPO_PUBLIC_CONVEX_URL, // 👈 IMPORTANT
      eas: {
        projectId: "8892f1e1-7f1b-4548-9bf4-60a3b5ce8fdb",
      },
    },
  },
};
