import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6"]} // Light gradient colors
      start={{ x: 1, y: 0 }} // Start from the top-left
      end={{ x: 1, y: 1 }} // End at the top-right
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={28} color="#000" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Share and Save Buttons */}

        {showShare && (
          <View style={styles.ShareIcon}>
            <TouchableOpacity onPress={onSharePress} style={styles.iconButton}>
              <Ionicons name="share-social-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
        {showSave && (
          <View style={styles.SaveIcon}>
            <TouchableOpacity onPress={onSavePress} style={styles.iconButton}>
              <Ionicons name="bookmark-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    flex: 1,
    marginHorizontal: 8, // Adjust spacing between buttons and title
  },
  backButton: {
    padding: 4,
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  ShareIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 100,
    marginRight: 10,
  },
  SaveIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 100,
  },
  iconButton: {
    padding: 8,
    // marginLeft: 8, // Spacing between share and save icons
  },
});

export default CustomBackButton;
