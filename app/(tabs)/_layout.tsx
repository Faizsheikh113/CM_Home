import { Tabs } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  Platform,
  StyleSheet,
} from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    tabBarIcon: {
      flex: 1,
      justifyContent: "center",
    },
    tabBarStyle: {
      paddingBottom: normalize(3), // Adjust margin top for responsive design
      height: normalize(60),
    },
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/home.png")}
              style={{ width: normalize(24), height: normalize(24) }} // Responsive icon size
            />
          ),
        }}
      />
      <Tabs.Screen
        name="News"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/news.png")}
              style={{ width: normalize(24), height: normalize(24) }} // Responsive icon size
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Scheme"
        options={{
          title: "Scheme",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/paper.png")}
              style={{ width: normalize(24), height: normalize(24) }} // Responsive icon size
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CM_Connect"
        options={{
          title: "CM connect",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/speaker.png")}
              style={{ width: normalize(24), height: normalize(24) }} // Responsive icon size
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Helpline",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/image 14.png")}
              style={{ width: normalize(24), height: normalize(24) }} // Responsive icon size
            />
          ),
        }}
      />
    </Tabs>
  );
}
