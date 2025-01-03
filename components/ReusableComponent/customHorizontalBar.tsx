import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

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
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#B89449",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#B89449", // Active tab color
  },
  tabText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff", // Active tab text color
  },
});

export default HorizontalTabBar;
