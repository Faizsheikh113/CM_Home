import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, PixelRatio } from "react-native";

// Get screen dimensions for responsive scaling
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

const FabButton = ({ onPress }: { onPress?: () => void }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log("Floating Action Button pressed!");
    }
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Image
        source={require("../../assets/images/sos.png")}
        style={styles.fabImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    backgroundColor: "#F9453D",
    right: normalize(16), // Margin from the right edge
    bottom: normalize(16), // Margin from the bottom edge
    borderRadius: normalize(28), // Circular button
    width: normalize(56), // Dynamic width
    height: normalize(56), // Dynamic height to maintain a square
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: normalize(5),
  },
  fabImage: {
    width: "60%", // Image size relative to the button
    height: "60%",
  },
});

export default FabButton;
