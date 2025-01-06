import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Platform,
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
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const quizOfTheDay = useQuizOfTheDay();
  const manKiBaatVideos = useManKiBaat();
  const onExplorePress = () => {
    console.log("Explore more");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
        <SectionHeader title="🚀 Quick Services" onExplorePress={onExplorePress} />
        {/* Quick Services */}
        <QuickServices />
        {/* Quiz of the Day */}
        <SectionHeader title="🚀 Quizzes For You" onExplorePress={onExplorePress} />
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
    </SafeAreaView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  scrollView: {
    paddingBottom: width * 0.05, // Add padding at the bottom to account for FAB
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: width * 0.02, // Adjust margin top based on width
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
  },
  locationText: {
    fontSize: width * 0.035, // Responsive font size
    color: "#888",
  },
  changeText: {
    fontSize: width * 0.035, // Responsive font size
    color: "#FFA726",
    fontWeight: "bold",
  },
});
