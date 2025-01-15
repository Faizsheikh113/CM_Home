import { FONT_SIZE } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";
import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375
  return Math.round(size * scale);
};

type HorizontalTabBarProps = {
  data: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
};

const HorizontalTabBar: React.FC<HorizontalTabBarProps> = ({
  data,
  activeTab,
  onTabPress,
}) => {
    const [loaded] = useFonts({
      InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
    });
    if (!loaded) {
      return null
    }
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.tab, activeTab === item && styles.activeTab]}
          onPress={() => onTabPress(item)}
        >
          <Text
            style={[styles.tabText, activeTab === item && styles.activeTabText]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    paddingHorizontal: normalize(8), // Adjust horizontal padding
  },
  tab: {
    paddingVertical: normalize(7), // Vertical padding
    paddingHorizontal: normalize(16), // Horizontal padding
    borderColor: "#B89449",
    borderWidth: 1,
    borderRadius: normalize(10), // Dynamic border radius
    marginHorizontal: normalize(5), // Spacing between tabs
  },
  activeTab: {
    backgroundColor: "#B89449", // Active tab background color
  },
  tabText: {
    fontFamily:'InterFonts',
    fontSize: normalize(FONT_SIZE.small), // Font size
    color: "#B89449",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff", // Active tab text color
  },
});

export default HorizontalTabBar;
