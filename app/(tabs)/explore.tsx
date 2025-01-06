import React, { useState } from "react";
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
import HorizontalTabBar from "@/components/ReusableComponent/customHorizontalBar";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Custom Header */}
        <CustomBackButton
          title="Scehema Detail's"
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

          {/* Horizontal Tabs */}
          <HorizontalTabBar
            data={categories}
            activeTab={activeTab}
            onTabPress={(tab) => setActiveTab(tab)}
          />

          {/* Content Repetition for Tab Example */}
          <Text style={styles.description}>
            Step into the world of innovation and creativity at our exclusive UI
            design event! Whether you're a seasoned designer or just starting
            out, this is your chance to explore cutting-edge tools, discover new
            trends, and connect with industry experts. From interactive
            workshops to inspiring talks, get ready to elevate your design game
            and create user experiences that truly captivate. Don't miss
            out—let's shape the future of design together!
          </Text>

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

      {/* Floating Action Button */}
      {/* <FabButton onPress={handleFabPress} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  contentContainer: {
    padding: width * 0.05, // Adjust padding dynamically
  },
  headerContainer: {
    padding: width * 0.05,
    backgroundColor: "#F9F9F9",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  headerTitle: {
    fontSize: width * 0.045, // Adjust font size based on screen width
    color: "#333",
    fontWeight: "bold",
    marginBottom: width * 0.02,
  },
  subHeaderTitle: {
    fontSize: width * 0.05,
    color: "#000",
    fontWeight: "bold",
    marginBottom: width * 0.03,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: width * 0.02,
  },
  tag: {
    backgroundColor: "#F2E6A7",
    color: "#000",
    fontSize: width * 0.035,
    fontWeight: "500",
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,
    marginRight: width * 0.02,
    marginBottom: width * 0.02,
  },
  description: {
    fontSize: width * 0.04,
    color: "#444",
    textAlign: "justify",
    lineHeight: width * 0.055,
    marginBottom: width * 0.05, // Adjust bottom margin for spacing
  },
  eligibilityButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.05, // Adjust for larger screens
  },
  eligibilityButton: {
    backgroundColor: "#B48D3E",
    width: width * 0.9,
    borderRadius: 5,
  },
  eligibilityButtonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HomeScreen;
