import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE, } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from "react-native";

// Get screen dimensions for responsive design
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

type SectionHeaderProps = {
  title: string;
  onExplorePress?: () => void;
  customStyles?: {
    sectionHeaderStyle?: object;
    sectionTitleStyle?: object;
    exploreTextStyle?: object;
  };
};

type RowListButtonReusableProps = {
  listData: Array<{ id: number | string; [key: string]: any }>;
  sectionTitle?: string;
  onExplorePress?: () => void;
  renderItem: ({ item }: { item: any }) => JSX.Element;
  customStyles?: {
    containerStyle?: object;
    sectionHeaderStyle?: object;
    sectionTitleStyle?: object;
    exploreTextStyle?: object;
  };
};

export const SectionHeader = ({
  title,
  onExplorePress,
  customStyles = {},
}: SectionHeaderProps) => {
  const { sectionHeaderStyle, sectionTitleStyle, exploreTextStyle } =
    customStyles;
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }

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
  const { containerStyle, sectionHeaderStyle, sectionTitleStyle, exploreTextStyle } = customStyles;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Section Header */}
      {sectionTitle && (
        <SectionHeader
          title={sectionTitle}
          onExplorePress={onExplorePress}
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
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    borderRadius: normalize(12),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: normalize(8),
    paddingHorizontal: normalize(15),
  },
  sectionTitle: {
    fontFamily: 'InterFonts',
    fontSize: normalize(FONT_SIZE.large), // Responsive font size
    fontWeight: "600",
    color: COLORS.HeadingColor,
  },
  exploreText: {
    fontSize: normalize(FONT_SIZE.medium), // Responsive font size
    color: "#B89449",
    fontWeight: "600",
  },
});

export default RowListButtonReusable;
