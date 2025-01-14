import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider } from "react-redux";
import store from "@/Redux/Store";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <NavigationContainer>
    // <LinearGradient
    //   colors={["#FFF7E5", "#FFFFFF"]} // Light gradient colors
    //   start={{ x: 0, y: 0 }} // Start from the top-left
    //   end={{ x: 0, y: 1 }} // End at the top-right
    //   style={{     flex: 1,
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-between", }}
    // >
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="Helpline" options={{ headerShown: false }}/>
          {/* <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="+not-found" /> */}
        </Stack>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </ThemeProvider>
    </Provider>
    //  </LinearGradient>
    // </NavigationContainer>
  );
}
