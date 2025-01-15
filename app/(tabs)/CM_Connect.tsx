import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  PixelRatio,
} from "react-native";
import CustomBackButton from "@/components/ReusableComponent/CustomBackButton";
import FabButton from "@/components/ReusableComponent/CustomFABButton";
import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";


// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: any) => {
  const scale = width / 375; // Base design width is 375
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Check if the device screen is large (e.g., foldable devices)
const isLargeScreen = width > 600;

const HomeScreen = () => {
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.BackGroundColor,
      paddingTop: Platform.OS === "android" ? 0 : 0,
    },
    scrollContent: {
      paddingBottom: normalize(16), // Add padding to the bottom to make space for FAB
    },
    contentContainer: {
      padding: normalize(16), // Dynamic padding
    },
    topNewsHeader: {
      fontFamily: 'InterFonts',
      color: "#F9453D",
      fontSize: normalize(FONT_SIZE.medium), // Adjust font size
      fontWeight: "bold",
      marginBottom: normalize(5),
    },
    postedTime: {
      fontFamily: 'InterFonts',
      fontSize: normalize(FONT_SIZE.ExtraSmall),
      color: COLORS.GrayColor,
    },
    mainImage: {
      width: "100%",
      height: normalize(200), // Adjust height dynamically
      borderRadius: normalize(8),
      marginBottom: normalize(16),
    },
    mainTitle: {
      fontFamily: 'InterFonts',
      fontSize: normalize(FONT_SIZE.large),
      fontWeight: "bold",
      color: COLORS.HeadingColor,
      marginBottom: normalize(16),
    },
    mainContent: {
      fontFamily: 'InterFonts',
      fontWeight: '400',
      fontSize: normalize(FONT_SIZE.small),
      color: COLORS.GrayColor,
      lineHeight: normalize(20),
      textAlign: 'justify'
    },
    playerDetailsImage: {
      flex: 1,
      width: "100%",
      borderRadius: normalize(30),
      marginTop: normalize(5),
    },
  });

  return (
    <View style={styles.container}>
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.topNewsHeader}>TOP NEWS</Text>
            <Text style={styles.postedTime}>24 hours ago posted</Text>
          </View>
          <Text style={styles.mainTitle}>
            Melbourne Test - Australia's playing-11 released: Sam Constas to
            debut, Scott Boland to return; India may play without any change
          </Text>
          {/* Main Image and News Content */}
          <Image
            source={require("../../assets/images/CricketrsImg.png")}
            style={styles.mainImage}
            resizeMode="cover"
          />
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
    </View>
  );
};

export default HomeScreen;
