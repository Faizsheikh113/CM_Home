import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from "react-native";

// Getting screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Normalize function for responsive scaling
const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375; // Base design width (375px)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

const isLargeScreen = SCREEN_WIDTH > 600; // Check for large screens (could be used for foldable devices)

// Adjustments based on screen size
const getImageHeight = () => {
  if (isLargeScreen) {
    return normalize(250); // Increase image height for large screens (foldables)
  }
  return normalize(160); // Default height for smaller screens
};

const getContainerPadding = () => {
  if (isLargeScreen) {
    return normalize(20); // More padding for larger screens
  }
  return normalize(16); // Default padding for smaller screens
};

const getHeaderFontSize = () => {
  if (isLargeScreen) {
    return normalize(24); // Larger font size for headers on large screens
  }
  return normalize(18); // Default font size for smaller screens
};

interface ManKiBaatVideoSectionProps {
  title: string;
  thumbnail: string;
  onPressViewAll: () => void;
}

const ManKiBaatVideoSection: React.FC<ManKiBaatVideoSectionProps> = ({
  title,
  thumbnail,
  onPressViewAll,
}) => {
  return (
    <View style={[styles.container, { padding: getContainerPadding() }]}>
      <Text style={[styles.header, { fontSize: getHeaderFontSize() }]}>Check out Mann ki Baat</Text>
      <Image source={{ uri: thumbnail }} style={[styles.thumbnail, { height: getImageHeight() }]} />
      <TouchableOpacity onPress={onPressViewAll}>
        <Text style={styles.buttonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8E1",
    borderRadius: normalize(12), // Dynamic border radius
    marginBottom: normalize(20), // Dynamic margin
    alignItems: "center",
    width: SCREEN_WIDTH * 0.9, // Container width relative to screen width
    alignSelf: "center", // Center the container horizontally
  },
  header: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: normalize(12), // Dynamic margin for spacing
    textAlign: "center",
  },
  thumbnail: {
    width: "100%",
    borderRadius: normalize(12), // Dynamic border radius for the image
    marginBottom: normalize(12), // Dynamic margin below the image
  },
  buttonText: {
    color: "#007BFF",
    fontWeight: "bold",
    fontSize: normalize(14), // Dynamic font size for the button text
  },
});

export default ManKiBaatVideoSection;
