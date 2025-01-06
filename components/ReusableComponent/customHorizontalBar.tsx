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
    paddingHorizontal: width * 0.02, // 2% horizontal padding
  },
  tab: {
    paddingVertical: width * 0.02, // Vertical padding relative to width
    paddingHorizontal: width * 0.04, // Horizontal padding relative to width
    borderColor: "#B89449",
    borderWidth: 1,
    borderRadius: width * 0.03, // Dynamic border radius
    marginHorizontal: width * 0.01, // Spacing between tabs
  },
  activeTab: {
    backgroundColor: "#B89449", // Active tab background color
  },
  tabText: {
    fontSize: width * 0.035, // Font size relative to width
    color: "#333",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff", // Active tab text color
  },
});

export default HorizontalTabBar;
