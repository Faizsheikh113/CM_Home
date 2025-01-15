import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  PixelRatio,
  Platform,
} from "react-native";
import Header from "@/components/ReusableComponent/CustomHeader";
import CustomSearchBar from "@/components/ReusableComponent/CustomSearchBar";
import ImageCard from "@/components/ReusableComponent/CustomCardImage";
import FabButton from "@/components/ReusableComponent/CustomFABButton";
import HorizontalTabBar from "@/components/ReusableComponent/customHorizontalBar";
import RowListButtonReusable, {
  SectionHeader,
} from "@/components/ReusableComponent/CustomReusableSchema";
import LocalImage from "../../assets/images/ScheamPageImage.png";
import { useNavigation } from "expo-router";
import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";

// Get screen dimensions for responsive design
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Near By");

  const categories = [
    "Near By",
    "Trending",
    "Politics",
    "Schemes",
    "Near By",
    "Trending",
    "Politics",
    "Schemes",
  ];
  const NewsData = [
    {
      id: "1",
      icon: require("../../assets/images/News_Image.png"), // Local image
      schemeTitle: "Top News",
      schemeDetails:
        "Union Health Minister JP Nadda said- India is now a country o...",
    },
    {
      id: "2",
      icon: "http://13.48.43.231/api/uploads/images/scheme", // Remote URL
      schemeTitle: "Top News",
      schemeDetails:
        "Union Health Minister JP Nadda said- India is now a country o...",
    },
    {
      id: "3",
      icon: require("../../assets/images/News_Image.png"), // Local image
      schemeTitle: "Top News",
      schemeDetails:
        "Union Health Minister JP Nadda said- India is now a country o...",
    },
    {
      id: "4",
      icon: require("../../assets/images/News_Image.png"), // Local image
      schemeTitle: "Top News",
      schemeDetails:
        "Union Health Minister JP Nadda said- India is now a country o...",
    },
  ];
    const [loaded] = useFonts({
      InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
    });
    if (!loaded) {
      return null
    }

  const handleFabPress = () => {
    console.log("FAB clicked!");
  };

  const CustomListNews = ({
    icon,
    title,
    subtitle,
    onPress,
  }: {
    icon: string | number; // Accept both local and remote sources
    title: string;
    subtitle: string;
    onPress: () => void;
  }) => {
    // Determine the source of the image
    const imageSource =
      typeof icon === "string" && icon.startsWith("http")
        ? { uri: icon } // Remote URL
        : icon; // Local image

    return (
      <TouchableOpacity style={styles.listItem} onPress={onPress}>
        <Image source={imageSource} style={styles.listIcon} />
        <View style={styles.listTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.listSubtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCustomText = () => (
    <View style={styles.textWrapper}>
      <Text style={styles.title}>Top News</Text>
      <Text style={styles.subtitle}>
        Union Health ministry JP Nadda Said- India is now a country of Givers
        and not Takers
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header
          buttonLabel="Man ki Baat"
          profileImageUrl="https://via.placeholder.com/40x40"
          onButtonPress={() => alert("Man ki Baat pressed!")}
          onProfilePress={() => alert("Profile pressed!")}
        />

        {/* Search Bar */}
        <CustomSearchBar
          placeholder="Search for Latest News"
          onSearch={(text) => console.log("Search Text:", text)}
        />

        {/* Section Header */}
        <View style={styles.sectionHeaderContainer}>
          <SectionHeader title="🔥 News of the Day" />
        </View>

        {/* Horizontal Tabs */}
        <HorizontalTabBar
          data={categories}
          activeTab={activeTab}
          onTabPress={(tab) => setActiveTab(tab)}
        />

        {/* Featured News Image */}
        <ImageCard
          imageUri={LocalImage}
          cardStyle={undefined}
          imageStyle={undefined}
          TextComponent={renderCustomText()}
        />

        {/* News List */}
        <RowListButtonReusable
          listData={NewsData}
          renderItem={({ item }) => (
            <CustomListNews
              icon={item.icon}
              title={item.schemeTitle}
              subtitle={item.schemeDetails}
              onPress={() => navigation.navigate("NewsDetail")}
            />
          )}
          customStyles={{
            sectionTitleStyle: { color: "#01579b" },
            exploreTextStyle: { color: "#ff5722" },
          }}
        />

        {/* Floating Action Button */}
      </ScrollView>
      <FabButton onPress={handleFabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGroundColor,
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  sectionHeaderContainer: {
    marginTop: normalize(8),
    marginBottom: normalize(5),
  },
  textWrapper: {},
  title: {
    fontFamily:'InterFonts',
    fontSize: normalize(FONT_SIZE.small),
    fontWeight: "700",
    color: "#F9453D",
  },
  subtitle: {
    fontFamily:'InterFonts',
    fontSize: normalize(FONT_SIZE.medium),
    fontWeight: "600",
    color: COLORS.HeadingColor,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.WhiteColor,
    borderRadius: normalize(10),
    marginVertical: normalize(5),
    elevation: 1,
  },
  listIcon: {
    width: normalize(100),
    height: normalize(100),
    marginRight: normalize(12),
    borderRadius: normalize(10),
    backgroundColor: "red",
  },
  listTextContainer: {
    padding: normalize(10),
    flex: 1,
  },
  listTitle: {
    fontFamily:'InterFonts',
    fontSize: normalize(FONT_SIZE.medium),
    fontWeight: "600",
    color: COLORS.HeadingColor,
  },
  listSubtitle: {
    fontFamily:'InterFonts',
    fontSize: normalize(FONT_SIZE.medium),
    color: COLORS.HeadingColor,
    marginTop: normalize(4),
  },
});

export default HomeScreen;
