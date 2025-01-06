import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import CustomBackButton from "@/components/ReusableComponent/CustomBackButton";
import FabButton from "@/components/ReusableComponent/CustomFABButton";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleSharePress = () => {
    console.log("Share button pressed");
  };

  const handleSavePress = () => {
    console.log("Save button pressed");
  };

  const handleFabPress = () => {
    console.log("FAB clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Custom Header */}
        <CustomBackButton
          title="News Detail"
          showShare={true}
          showSave={true}
          onBackPress={handleBackPress}
          onSharePress={handleSharePress}
          onSavePress={handleSavePress}
        />

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Top News Header */}
          <Text style={styles.topNewsHeader}>TOP NEWS</Text>
          <Text style={styles.postedTime}>24 hours ago posted</Text>

          {/* Main Image and News Content */}
          <Image
            source={require("../../assets/images/CricketrsImg.png")}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <Text style={styles.mainTitle}>
            Melbourne Test - Australia's playing-11 released: Sam Constas to
            debut, Scott Boland to return; India may play without any change
          </Text>
          <Text style={styles.mainContent}>
            The fourth match of the Border Gavaskar Trophy between India and
            Australia will be played at the Melbourne Stadium from tomorrow (26
            December). The match will start at 5:00 am. Cricket Australia has
            released the playing-11 for this match on Wednesday. The team has
            made 2 changes. Sam Constas will make his debut, while Scott Boland
            will play in place of injured Josh Hazlewood. At the same time,
            Travis Head, who was injured in the Gabba Test, has become fit.
          </Text>
          <Text style={styles.mainContent}>
            Looking at the performance of Team India in the last match, the team
            can play in this match without any change in the playing-11. The 5
            match test series is tied at 1-1. India won the first match and
            Australia won the second match. The third match was a draw.
          </Text>

          {/* Player Details as Image */}
          <Image
            source={require("../../assets/images/PlayersNews.png")}
            style={styles.playerDetailsImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <FabButton onPress={handleFabPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  scrollContent: {
    paddingBottom: width * 0.05, // Add padding to the bottom to make space for FAB
  },
  contentContainer: {
    padding: width * 0.04, // 4% padding of screen width
  },
  topNewsHeader: {
    color: "#F9453D",
    fontSize: width * 0.045, // Adjust font size based on screen width
    fontWeight: "bold",
    marginBottom: width * 0.02,
  },
  postedTime: {
    fontSize: width * 0.035, // Responsive font size
    color: "#777",
    marginBottom: width * 0.04,
  },
  mainImage: {
    width: "100%",
    height: width * 0.5, // Adjust height dynamically based on screen width
    borderRadius: 10,
    marginBottom: width * 0.04,
  },
  mainTitle: {
    fontSize: width * 0.05, // Adjust font size based on screen width
    fontWeight: "bold",
    color: "#000",
    marginBottom: width * 0.02,
  },
  mainContent: {
    fontSize: width * 0.035, // Responsive font size
    color: "#333",
    lineHeight: width * 0.05, // Adjust line height dynamically
    marginBottom: width * 0.04,
  },
  playerDetailsImage: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    marginTop: width * 0.04,
  },
});

export default HomeScreen;
