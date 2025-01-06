import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
    <View style={styles.container}>
      <Text style={styles.header}>Check out Mann ki Baat</Text>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <TouchableOpacity onPress={onPressViewAll}>
        <Text style={styles.buttonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8E1",
    borderRadius: width * 0.03, // Dynamic border radius
    padding: width * 0.04, // Dynamic padding
    marginBottom: width * 0.05, // Dynamic margin
    alignItems: "center",
    width: width * 0.9, // Container width relative to screen width
    alignSelf: "center", // Center the container horizontally
  },
  header: {
    fontSize: width * 0.045, // Dynamic font size for the header
    fontWeight: "bold",
    color: "#333",
    marginBottom: width * 0.03, // Dynamic margin for spacing
    textAlign: "center",
  },
  thumbnail: {
    width: "100%",
    height: width * 0.4, // Dynamic height for the image
    borderRadius: width * 0.03, // Dynamic border radius for the image
    marginBottom: width * 0.03, // Dynamic margin below the image
  },
  buttonText: {
    color: "#007BFF",
    fontWeight: "bold",
    fontSize: width * 0.035, // Dynamic font size for the button text
  },
});

export default ManKiBaatVideoSection;
