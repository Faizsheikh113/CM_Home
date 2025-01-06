import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface ImageCardProps {
  imageUri: { uri: string }; // Adjusted for proper typing of the image source
  cardStyle?: object;
  imageStyle?: object;
  TextComponent?: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUri, cardStyle, imageStyle, TextComponent }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={imageUri} style={[styles.image, imageStyle]} />
      {TextComponent && <View style={styles.textContainer}>{TextComponent}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: width * 0.03, // Dynamic border radius
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: width * 0.03,
    marginHorizontal: width * 0.04,
  },
  image: {
    width: "100%",
    height: height * 0.25, // Dynamic height based on screen size
    resizeMode: "cover", // Ensure the image fits properly
  },
  textContainer: {
    padding: width * 0.03, // Dynamic padding
    backgroundColor: "#fff",
  },
});

export default ImageCard;
