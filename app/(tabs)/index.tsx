import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  PixelRatio,
} from "react-native";
import Header from "@/components/ReusableComponent/CustomHeader";
import CustomSearchBar from "@/components/ReusableComponent/CustomSearchBar";
import CustomCarousel from "@/components/ReusableComponent/CustomCrousal";
import QuizCard from "@/components/ReusableComponent/CustomQuizForTheDay";
import ManKiBaatVideoSection from "@/components/ReusableComponent/CustomManKiBatVideo";
import QuickServices from "@/components/ReusableComponent/CustomQuickService";
import { useQuizOfTheDay } from "@/components/CustomHook/QuizOfTheDayHook";
import { useManKiBaat } from "@/components/CustomHook/ManKiBatHook";
import { SectionHeader } from "@/components/ReusableComponent/CustomReusableSchema";
import { FONT_SIZE, InterFont } from "@/assets/fonts/Constants";
import { COLORS } from "@/assets/Constants/Colors";
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
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Check if the device screen is large (e.g., foldable devices)
const isLargeScreen = width > 600; // Adjust the threshold as per requirement

const getLocationContainerWidth = () => {
  if (isLargeScreen) {
    return (400 / 375) * width; // More width for large screens
  }
  return (357 / 375) * width; // Default width for smaller screens
};

const getTextMarginTop = () => {
  if (isLargeScreen) {
    return normalize(10); // More margin top for large screens
  }
  return normalize(8); // Default margin top for smaller screens
};

export default function HomeScreen() {
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
  const quizOfTheDay = useQuizOfTheDay();
  const manKiBaatVideos = useManKiBaat();

  const onExplorePress = () => {
    console.log("Explore more");
  };

  // Stylesheet with responsive design
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.BackGroundColor,
    },
    scrollView: {
      paddingBottom: normalize(16), // Adjusted padding at the bottom to account for FAB
    },
    locationContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: getTextMarginTop(), // Adjust margin top dynamically
      width: getLocationContainerWidth(), // Dynamically calculate width
      height: normalize(24), // Adjust height proportionally
      alignSelf: "center",
      paddingHorizontal: normalize(20), // Adjust padding horizontally
    },
    locationText: {
      fontFamily: 'Inter_400Regular',
      fontSize: normalize(FONT_SIZE.small), // Responsive font size
      color: "#BAC4D2",
    },
    changeText: {
      fontFamily: 'Inter_400Regular',
      fontSize: normalize(FONT_SIZE.small), // Responsive font size
      color: "#B48D3E",
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header */}
        <Header
          buttonLabel="Man ki Baat"
          profileImageUrl="https://via.placeholder.com/40x40"
          onButtonPress={() => alert("Man ki Baat pressed!")}
          onProfilePress={() => alert("Profile pressed!")}
        />
        {/* Search Bar */}
        <CustomSearchBar
          placeholder="Search for 'NEAR BY HEALTH CENTER'"
          onSearch={(text) => console.log("Search Text:", text)}
        />
        {/* Location and Change Button Section */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Anand Vihar, Street 4, Delhi (492001)
          </Text>
          <TouchableOpacity onPress={() => alert("Change button pressed!")}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
        {/* Carousel */}
        <CustomCarousel />
        {/* 🚀 Quick Services */}
        <SectionHeader
          title="🚀 Quick Services"
          onExplorePress={onExplorePress}
        />
        {/* Quick Services */}
        <QuickServices />
        {/* Quiz of the Day */}
        <SectionHeader
          title="🚀 Quizzes For You"
          onExplorePress={onExplorePress}
        />
        {quizOfTheDay && (
          <QuizCard
            title={quizOfTheDay.title}
            lastDate={quizOfTheDay.lastDate}
            questionCount={quizOfTheDay.questionCount}
            duration={quizOfTheDay.duration}
            thumbnail={quizOfTheDay.thumbnail}
            onParticipate={() =>
              alert(`Participating in quiz: ${quizOfTheDay.title}`)
            }
          />
        )}
        {/* Man ki Baat Video Section */}
        {manKiBaatVideos.length > 0 && (
          <ManKiBaatVideoSection
            title={manKiBaatVideos[0].title}
            thumbnail={manKiBaatVideos[0].thumbnail}
            onPressViewAll={() => alert("Viewing all Man ki Baat videos")}
          />
        )}
      </ScrollView>
    </View>
  );
}
