import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "Ladli Behna Yojna",
    description: "This month, get up to ₹1250",
    image: "https://via.placeholder.com/350x150", // Replace with actual image URLs
  },
  {
    id: "2",
    title: "Health Initiative",
    description: "Get free health checkups nearby",
    image: "https://via.placeholder.com/350x150",
  },
  {
    id: "3",
    title: "Education Campaign",
    description: "Empower yourself with knowledge",
    image: "https://via.placeholder.com/350x150",
  },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
  },
  card: {
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.03,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: height * 0.2, // Dynamic height
    resizeMode: "cover",
  },
  textContainer: {
    padding: width * 0.03,
  },
  title: {
    fontSize: width * 0.045, // Dynamic font size
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: width * 0.04, // Dynamic font size
    color: "#666",
    marginTop: height * 0.005,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.01,
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.01,
  },
  activeDot: {
    backgroundColor: "#B89449",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default CustomCarousel;
