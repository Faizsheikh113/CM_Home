import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

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
    right: width * 0.05, // 5% from the right edge
    bottom: height * 0.05, // 5% from the bottom edge
    borderRadius: width * 0.15, // Ensure the button stays circular
    width: width * 0.15, // Dynamic width
    height: width * 0.15, // Dynamic height to maintain a square
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  fabImage: {
    width: "60%", // Image size relative to the button
    height: "60%",
  },
});

export default FabButton;
