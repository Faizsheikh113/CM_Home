import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarIconStyle: {
          marginTop: "10%",
          paddingVertical: 3,
        },
        tabBarStyle: { height: "7%" },
        // Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: "absolute",
        //   },
        //   default: {},
        // }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/images/home.png")} />
            // <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="News"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/images/news.png")} />
            // <IconSymbol size={28} name="newspaper.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Scheme"
        options={{
          title: "Scheme",
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/images/paper.png")} />
            // <IconSymbol size={28} name="article.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CM_Connect"
        options={{
          title: "CM connect",
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/images/speaker.png")} />
            // <IconSymbol size={28} name="account-box.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Helpline",
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/images/image 14.png")} />
            // <IconSymbol size={28} name="contact-support.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
