import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import CustomBackButton from "@/components/ReusableComponent/CustomBackButton";
import FabButton from "@/components/ReusableComponent/CustomFABButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalTabBar from "@/components/ReusableComponent/customHorizontalBar";
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

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375
  return Math.round(size * scale);
};

const HomeScreen = () => {
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
  const [activeTab, setActiveTab] = useState("Details");

  const categories = ["Details", "Benefits", "Eligibility", "How to Apply"];
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
    <View style={styles.container}>
      <ScrollView>
        {/* Custom Header */}
        <CustomBackButton
          title="Schema Detail's"
          showShare={true}
          showSave={true}
          onBackPress={handleBackPress}
          onSharePress={handleSharePress}
          onSavePress={handleSavePress}
        />

        {/* Main Content */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Ministry of Housing & Urban Affairs
          </Text>
          <Text style={styles.subHeaderTitle}>
            Pradhan Mantri Awas Yojana-Urban
          </Text>

          {/* Tags Section */}
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>HOUSING</Text>
            <Text style={styles.tag}>URBAN</Text>
            <Text style={styles.tag}>REHABILITATION</Text>
            <Text style={styles.tag}>LOAN</Text>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            Step into the world of innovation and creativity at our exclusive UI
            design event! Whether you're a seasoned designer or just starting
            out, this is your chance to explore cutting-edge tools, discover new
            trends, and connect with industry experts. From interactive
            workshops to inspiring talks, get ready to elevate your design game
            and create user experiences that truly captivate. Don't miss
            out—let's shape the future of design together!
          </Text>

          <View
            style={{
              flex:1,
              padding: normalize(10),
              borderRadius: normalize(10),
              backgroundColor: COLORS.WhiteColor,
            }}
          >
            <HorizontalTabBar
              data={categories}
              activeTab={activeTab}
              onTabPress={(tab) => setActiveTab(tab)}
            />

            {/* Content Repetition for Tab Example */}
            <Text style={styles.description}>
              Step into the world of innovation and creativity at our exclusive
              UI design event! Whether you're a seasoned designer or just
              starting out, this is your chance to explore cutting-edge tools,
              discover new trends, and connect with industry experts. From
              interactive workshops to inspiring talks, get ready to elevate
              your design game and create user experiences that truly captivate.
              Don't miss out—let's shape the future of design together!
            </Text>
          </View>

          {/* Horizontal Tabs */}

          {/* Eligibility Button */}
          <View style={styles.eligibilityButtonContainer}>
            <TouchableOpacity style={styles.eligibilityButton}>
              <Text style={styles.eligibilityButtonText}>
                Check Eligibility
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: Platform.OS === "android" ? normalize(0) : normalize(0),
  },
  headerContainer: {
    padding: normalize(16),
    backgroundColor: "#F9F9F9",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  headerTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: normalize(FONT_SIZE.medium),
    color: COLORS.HeadingColor,
    fontWeight: "bold",
    // marginBottom: normalize(8),
  },
  subHeaderTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: normalize(FONT_SIZE.large),
    color: "#B48D3E",
    fontWeight: "bold",
    marginBottom: normalize(12),
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: normalize(8),
  },
  tag: {
    fontFamily: 'Inter_400Regular',
    backgroundColor: "#FEEDCA",
    color: "#B48D3E",
    fontSize: normalize(FONT_SIZE.ExtraSmall),
    fontWeight: "700",
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(8),
    borderRadius: normalize(8),
    marginRight: normalize(8),
    marginBottom: normalize(5),
  },
  contentContainer: {
    padding: normalize(16),
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: normalize(FONT_SIZE.small),
    color: COLORS.HeadingColor,
    textAlign: "justify",
    lineHeight: normalize(21),
    marginBottom: normalize(16),
  },
  eligibilityButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: normalize(5),
  },
  eligibilityButton: {
    backgroundColor: "#B48D3E",
    width: "90%",
    borderRadius: normalize(8),
  },
  eligibilityButtonText: {
    color: "white",
    textAlign: "center",
    padding: normalize(12),
    fontSize: normalize(16),
    fontWeight: "500",
  },
});

export default HomeScreen;
