import React, { useEffect, useState } from "react";
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
import CustomCarousel from "@/components/ReusableComponent/CustomCrousal";
import QuizCard from "@/components/ReusableComponent/CustomQuizForTheDay";
import ManKiBaatVideoSection from "@/components/ReusableComponent/CustomManKiBatVideo";
import QuickServices from "@/components/ReusableComponent/CustomQuickService";
import { useQuizOfTheDay } from "@/components/CustomHook/QuizOfTheDayHook";
import { useManKiBaat } from "@/components/CustomHook/ManKiBatHook";
import ImageCard from "@/components/ReusableComponent/CustomCardImage";
// import LocalImage from "../../assets/images/ScheamPageImage.png";
import ReusableComponent, {
  SectionHeader,
} from "@/components/ReusableComponent/CustomReusableSchema";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchemes } from "@/Redux/Sclise/SchemeSclise";
import FabButton from "@/components/ReusableComponent/CustomFABButton";
import HorizontalScrollBar from "@/components/ReusableComponent/customHorizontalBar";
import HorizontalTabBar from "@/components/ReusableComponent/customHorizontalBar";
import LocalImage from "../../assets/images/ScheamPageImage.png";
export default function HomeScreen() {
  const handleFabPress = () => {
    console.log("FAB clicked in AnotherComponent!");
  };

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
  const renderCustomText = () => (
    <View style={styles.textWrapper}>
      <Text style={styles.title}>Top News</Text>
      <Text style={styles.subtitle}>
        Union Health ministry JP Nanda Said- India is now a cuntry of Givers and
        not Tackers
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header
        buttonLabel="Man ki Baat"
        profileImageUrl="https://via.placeholder.com/40x40"
        languageText="HI | अ"
        onButtonPress={() => alert("Man ki Baat pressed!")}
        onProfilePress={() => alert("Profile pressed!")}
      />

      {/* Search Bar */}
      <CustomSearchBar
        placeholder="Search for Latest News"
        onSearch={(text) => console.log("Search Text:", text)}
      />

      <View style={{ marginVertical: "2%" }}>
        <SectionHeader
          title="🚀 News of the day"
          // onExplorePress={() => console.log("Explore all pressed")}
        />
      </View>
      <HorizontalTabBar
        data={categories}
        activeTab={activeTab}
        onTabPress={(tab) => setActiveTab(tab)}
      />

      <ImageCard
        imageUri={LocalImage}
        cardStyle={undefined}
        imageStyle={undefined}
        TextComponent={renderCustomText()}
      />
      {/* <View style={styles.content}>
        <Text style={styles.contentText}>Selected Tab: {activeTab}</Text>
      </View> */}

      <FabButton onPress={handleFabPress} />
    </ScrollView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scrollStyle: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
  },
  itemStyle: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FFA726",
    elevation: 2,
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textWrapper: {
    // alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F9453D",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    marginTop: 5,
  },
});
