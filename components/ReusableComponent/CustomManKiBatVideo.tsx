import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ManKiBaatVideoSectionProps {
  title: string;
  thumbnail: string;
  onPressViewAll: () => void;
}

const ManKiBaatVideoSection: React.FC<ManKiBaatVideoSectionProps> = ({ title, thumbnail, onPressViewAll }) => {
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
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#007BFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ManKiBaatVideoSection;
