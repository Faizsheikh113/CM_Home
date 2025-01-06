import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
        keyExtractor={(item) => item.id}
        renderItem={renderItem} // Use the custom renderItem passed from the parent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  exploreText: {
    fontSize: 14,
    color: "#B89449",
    fontWeight: "600",
  },
});

export default RowListButtonReusable;
