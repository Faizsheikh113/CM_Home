import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import CustomBackButton from "@/components/ReusableComponent/CustomBackButton";

const HomeScreen = () => {
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

  const handleFabPress = () => {
    console.log("FAB clicked!");
  };
  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleSharePress = () => {
    console.log("Share button pressed");
  };

  const handleSavePress = () => {
    console.log("Save button pressed");
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
          <Text style={styles.listTitle}>{title}</Text>
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
        <CustomBackButton
          title="News Detail"
          showShare={true}
          showSave={true}
          onBackPress={handleBackPress}
          onSharePress={handleSharePress}
          onSavePress={handleSavePress}
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
              onPress={() => console.log(`${item.schemeTitle} pressed`)}
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
    backgroundColor: "#f8f8f8",
  },
  sectionHeaderContainer: {
    marginVertical: "2%",
  },
  textWrapper: {},
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F9453D",
    padding: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    marginTop: 5,
    padding: 5,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    elevation: 1,
  },
  listIcon: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 5,
    backgroundColor: "red",
  },
  listTextContainer: {
    flex: 1,
    padding: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  listSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default HomeScreen;
