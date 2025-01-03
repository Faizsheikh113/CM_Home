import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const FabButton = ({ onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log("Floating Action Button pressed!");
    }
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Image source={require("../../assets/images/sos.png")} style={styles.fabImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        backgroundColor: "#F9453D",
        tintColor: "white",
        padding: 0,
        right: 20,
        top: 750,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, // Adds shadow on Android
        shadowColor: "#000", // Shadow on iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      floatingButtonText: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
      },
});

export default FabButton;
