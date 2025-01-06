import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const FabButton = ({ onPress }: { onPress?: () => void }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log("Floating Action Button pressed!");
    }
  };

  return (
    // <View style={styles.container}>
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Image source={require("../../assets/images/sos.png")} style={styles.fabImage} />
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#F9453D",
    tintColor: "white",
    right: 20,
    bottom: 20, // Keep it near the bottom of the screen
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Shadow on iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default FabButton;
