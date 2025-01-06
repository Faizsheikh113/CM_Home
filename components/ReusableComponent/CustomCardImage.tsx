import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ImageCard = ({ imageUri, cardStyle, imageStyle, TextComponent }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={imageUri} style={[styles.image, imageStyle]} />
      {TextComponent && <View style={styles.textContainer}>{TextComponent}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    margin: 10,
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default ImageCard;
