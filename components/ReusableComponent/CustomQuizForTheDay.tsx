import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

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
      {/* <View style={styles.header}>
        <Text style={styles.title}>🚀 Quick Services</Text>
        <TouchableOpacity>
          <Text style={styles.explore}>Explore all</Text>
        </TouchableOpacity>
      </View> */}
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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  explore: {
    fontSize: 14,
    color: "#007BFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    // backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B89449",
  },
  buttonText: {
    color: "#B89449",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default QuizCard;
