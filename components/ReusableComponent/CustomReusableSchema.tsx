import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE, InterFont } from "@/assets/fonts/Constants";
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
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

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
    let [fontsLoaded] = useFonts({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black,
    });

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
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
    borderRadius: normalize(12),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: normalize(8),
    paddingHorizontal: normalize(20),
  },
  sectionTitle: {
    fontFamily: 'Inter_400Regular',
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
