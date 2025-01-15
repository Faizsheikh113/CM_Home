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
          headerShown: false,
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

// import React from "react";
// import {
//   Dimensions,
//   Image,
//   PixelRatio,
//   Platform,
//   StyleSheet,
// } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// // import NewsScreen from "../screens/NewsScreen";
// // import NewsDetailScreen from "../screens/NewsDetailScreen";
// // import SchemaScreen from "../screens/SchemaScreen";
// // import SchemaDetailScreen from "../screens/SchemaDetailScreen";
// // import CMHomeScreen from "../screens/CMHomeScreen";
// // import HelplineScreen from "../screens/HelplineScreen";
// import HomeScreen from './index';
// import NewsScreen from './News';
// import SchemaScreen from './Scheme';
// import CMHomeScreen from './CM_Connect';
// import HelplineScreen from './explore';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// // Normalize function for responsive scaling
// const normalize = (size: number) => {
//   const scale = Dimensions.get("window").width / 375;
//   return Math.round(PixelRatio.roundToNearestPixel(size * scale));
// };

// // Home Stack
// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// // News Stack
// function NewsStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="News" component={NewsScreen} />
//       <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
//     </Stack.Navigator>
//   );
// }

// // Schema Stack
// function SchemaStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Schema" component={SchemaScreen} />
//       <Stack.Screen name="SchemaDetail" component={SchemaDetailScreen} />
//     </Stack.Navigator>
//   );
// }

// // CM Home Stack
// function CMHomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="CMHome" component={CMHomeScreen} />
//     </Stack.Navigator>
//   );
// }

// // Helpline Stack
// function HelplineStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Helpline" component={HelplineScreen} />
//     </Stack.Navigator>
//   );
// }

// // Main Navigator with Bottom Tabs
// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: "#007AFF",
//           tabBarStyle: { height: normalize(60) },
//           headerShown: false,
//         }}
//       >
//         <Tab.Screen
//           name="HomeTab"
//           component={HomeStack}
//           options={{
//             tabBarLabel: "Home",
//             tabBarIcon: ({ color }) => (
//               <Image
//                 source={require("../../assets/images/home.png")}
//                 style={{ width: normalize(24), height: normalize(24), tintColor: color }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="NewsTab"
//           component={NewsStack}
//           options={{
//             tabBarLabel: "News",
//             tabBarIcon: ({ color }) => (
//               <Image
//                 source={require("../../assets/images/news.png")}
//                 style={{ width: normalize(24), height: normalize(24), tintColor: color }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="SchemaTab"
//           component={SchemaStack}
//           options={{
//             tabBarLabel: "Schema",
//             tabBarIcon: ({ color }) => (
//               <Image
//                 source={require("../../assets/images/paper.png")}
//                 style={{ width: normalize(24), height: normalize(24), tintColor: color }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="CMHomeTab"
//           component={CMHomeStack}
//           options={{
//             tabBarLabel: "CM Home",
//             tabBarIcon: ({ color }) => (
//               <Image
//                 source={require("../../assets/images/speaker.png")}
//                 style={{ width: normalize(24), height: normalize(24), tintColor: color }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="HelplineTab"
//           component={HelplineStack}
//           options={{
//             tabBarLabel: "Helpline",
//             tabBarIcon: ({ color }) => (
//               <Image
//                 source={require("../../assets/images/image 14.png")}
//                 style={{ width: normalize(24), height: normalize(24), tintColor: color }}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
