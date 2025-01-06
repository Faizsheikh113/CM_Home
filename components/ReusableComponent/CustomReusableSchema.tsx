import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type SectionHeaderProps = {
  title: string;
  onExplorePress?: () => void;
  customStyles?: {
    sectionHeaderStyle?: any;
    sectionTitleStyle?: any;
    exploreTextStyle?: any;
  };
};

type RowListButtonReusableProps = {
  listData: Array<any>;
  sectionTitle?: string;
  onExplorePress?: () => void;
  renderItem: ({ item }: { item: any }) => JSX.Element; // Allow a custom ListItem component
  customStyles?: {
    containerStyle?: any;
    sectionHeaderStyle?: any;
    sectionTitleStyle?: any;
    exploreTextStyle?: any;
  };
};

export const SectionHeader = ({
  title,
  onExplorePress,
  customStyles = {},
}: SectionHeaderProps) => {
  const { sectionHeaderStyle, sectionTitleStyle, exploreTextStyle } =
    customStyles;

  return (
    <View style={[styles.sectionHeader, sectionHeaderStyle]}>
      <Text style={[styles.sectionTitle, sectionTitleStyle]}>{title}</Text>
      {onExplorePress && (
        <TouchableOpacity onPress={onExplorePress}>
          <Text style={[styles.exploreText, exploreTextStyle]}>
            Explore all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const RowListButtonReusable = ({
  listData,
  sectionTitle,
  onExplorePress,
  renderItem,
  customStyles = {},
}: RowListButtonReusableProps) => {
  const {
    containerStyle,
    sectionHeaderStyle,
    sectionTitleStyle,
    exploreTextStyle,
  } = customStyles;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Section Header */}
      {sectionTitle && (
        <SectionHeader
          title={sectionTitle}
          onExplorePress={onExplorePress}
          customStyles={{
            sectionHeaderStyle,
            sectionTitleStyle,
            exploreTextStyle,
          }}
        />
      )}

      {/* FlatList with custom ListItem */}
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem} // Use the custom renderItem passed from the parent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: screenWidth * 0.04, // Dynamic horizontal padding based on screen width
    paddingVertical: screenHeight * 0.02, // Dynamic vertical padding based on screen height
    borderRadius: screenWidth * 0.05, // Dynamic border radius based on screen width
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: screenHeight * 0.015, // Adjust margin bottom based on screen height
    paddingHorizontal: screenWidth * 0.05, // Dynamic horizontal padding for header
  },
  sectionTitle: {
    fontSize: screenWidth * 0.045, // Dynamic font size based on screen width
    fontWeight: "600",
    color: "#333",
  },
  exploreText: {
    fontSize: screenWidth * 0.04, // Dynamic font size for explore text
    color: "#B89449",
    fontWeight: "600",
  },
});

export default RowListButtonReusable;
