import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface QuizCardProps {
  title: string;
  lastDate: string;
  questionCount: number;
  duration: number;
  thumbnail: string;
  onParticipate: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  lastDate,
  questionCount,
  duration,
  thumbnail,
  onParticipate,
}) => {
  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>LAST DATE {lastDate}</Text>
          <Text style={styles.details}>
            {questionCount} Questions • {duration / 60} Min
          </Text>
          <TouchableOpacity style={styles.button} onPress={onParticipate}>
            <Text style={styles.buttonText}>Participate Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    paddingHorizontal: screenWidth * 0.04, // Dynamic padding based on screen size
    paddingVertical: screenHeight * 0.02,
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: screenWidth * 0.03, // Dynamic border radius
    marginBottom: screenHeight * 0.02, // Dynamic margin based on screen size
    overflow: "hidden",
    elevation: 3, // Elevation for shadow on Android
  },
  thumbnail: {
    width: "100%",
    height: screenHeight * 0.2, // Dynamic height for the thumbnail
  },
  content: {
    padding: screenWidth * 0.04, // Dynamic padding for content
  },
  title: {
    fontSize: screenWidth * 0.045, // Dynamic font size
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: screenWidth * 0.035, // Dynamic font size for details
    color: "#777",
    marginTop: screenHeight * 0.01, // Dynamic margin for spacing
  },
  button: {
    marginTop: screenHeight * 0.015, // Dynamic margin for button
    paddingVertical: screenHeight * 0.015, // Dynamic padding for button
    borderRadius: screenWidth * 0.025, // Dynamic border radius
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B89449",
  },
  buttonText: {
    color: "#B89449",
    fontWeight: "bold",
    fontSize: screenWidth * 0.04, // Dynamic font size for button text
  },
});

export default QuizCard;
