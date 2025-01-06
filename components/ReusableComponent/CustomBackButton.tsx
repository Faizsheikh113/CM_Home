import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

interface HeaderProps {
  title: string;
  showShare?: boolean;
  showSave?: boolean;
  onBackPress: () => void;
  onSharePress?: () => void;
  onSavePress?: () => void;
}

const CustomBackButton: React.FC<HeaderProps> = ({
  title,
  showShare = false,
  showSave = false,
  onBackPress,
  onSharePress,
  onSavePress,
}) => {
  return (
    <LinearGradient
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        {/* Back Button */}
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={width * 0.07} color="#000" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Share and Save Buttons */}
        {showShare && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onSharePress} style={styles.iconButton}>
              <Ionicons name="share-social-outline" size={width * 0.06} color="#000" />
            </TouchableOpacity>
          </View>
        )}
        {showSave && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onSavePress} style={styles.iconButton}>
              <Ionicons name="bookmark-outline" size={width * 0.06} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.08, // Adjust based on screen height
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 10 : 0, // Adjust padding for Android/iOS
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05, // 5% of screen width
  },
  backButton: {
    padding: width * 0.02,
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: width * 0.02,
  },
  title: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    flex: 1,
    marginHorizontal: width * 0.02,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: width * 0.05,
    marginLeft: width * 0.02,
  },
  iconButton: {
    padding: width * 0.02, // Dynamic padding
  },
});

export default CustomBackButton;
