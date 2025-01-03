import React, { useEffect } from "react";
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
import LocalImage from "../../assets/images/ScheamPageImage.png";
import ReusableComponent, {
  SectionHeader,
} from "@/components/ReusableComponent/CustomReusableSchema";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchemes } from "@/Redux/Sclise/SchemeSclise";
import FabButton from "@/components/ReusableComponent/CustomFABButton";

export default function HomeScreen() {
  const quizOfTheDay = useQuizOfTheDay();
  const manKiBaatVideos = useManKiBaat();
  const onFABPress = () => {
    console.log("Floating Action Button pressed!");
    // You can add any action here like navigating to another screen or opening a dialog.
  };

  const dispatch = useDispatch();

  // Get data, loading, and error states from Redux store
  const { schemes, loading, error } = useSelector((state) => state.schemes);

  // Dispatch the fetchSchemes action when the component mounts
  useEffect(() => {
    dispatch(fetchSchemes());
  }, [dispatch]);
  const handleFabPress = () => {
    console.log("FAB clicked in AnotherComponent!");
  };

  const listData = [
    {
      id: "1",
      icon: require("../../assets/images/TrandingSchemeIcon.png"),
      title: "Pradhan Mantri Awass Yojna",
      subtitle: "Ministry of Housing & Urban Affairs",
    },
    {
      id: "2",
      icon: require("../../assets/images/TrandingSchemeIcon.png"),
      title: "Pradhan Mantri Awass Yojna",
      subtitle: "Ministry of Housing & Urban Affairs",
    },
    {
      id: "3",
      icon: require("../../assets/images/TrandingSchemeIcon.png"),
      title: "Pradhan Mantri Awass Yojna",
      subtitle: "Ministry of Housing & Urban Affairs",
    },
  ];
  const ListData = [
    {
      id: "1",
      icon: require("../../assets/images/Tactor_Icon.png"),
      title: "Agriculture, Rural & Environment",
      subtitle: "352 Scheams",
    },
    {
      id: "2",
      icon: require("../../assets/images/Bank_icon.png"),
      title: "Banking, Financial Services & Insuranance",
      subtitle: "258 Scheams",
    },
    {
      id: "3",
      icon: require("../../assets/images/Ruppy_Icon.png"),
      title: "Business & ownership",
      subtitle: "667 Scheams",
    },
  ];

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

      <ImageCard
        imageUri={LocalImage}
        cardStyle={undefined}
        imageStyle={undefined}
      />
      <SectionHeader
        title="🔥 Trending Schemes"
        onExplorePress={() => console.log("Explore all pressed")}
      />
      <ReusableComponent
        // bannerData={bannerData}
        listData={schemes}
        // onExplorePress={() => console.log("Explore all pressed")}
      />
      <SectionHeader
        title="🔥 Other Schemes"
        onExplorePress={() => console.log("Explore all pressed")}
      />
      <ReusableComponent
        // bannerData={bannerData}
        listData={schemes}
        // onExplorePress={() => console.log("Explore all pressed")}
      />

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
});
