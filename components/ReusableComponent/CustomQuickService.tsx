import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Component
const QuickServices: React.FC = () => {
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }
  const quickServices = [
    {
      id: 1,
      name: "Quizzes",
      icon: require("../../assets/images/Quizes.png"),
      description: "Your fun & earn in one place",
    },
    {
      id: 2,
      name: "Health",
      icon: require("../../assets/images/Health.png"),
      description: "Stay healthy, unstoppable!",
    },
    {
      id: 3,
      name: "Baby Care",
      icon: require("../../assets/images/Baby Care.png"),
      description: "Parenting made easier!",
    },
    {
      id: 4,
      name: "Courses",
      icon: require("../../assets/images/Courses.png"),
      description: "Learn smarter, not harder!",
    },
  ];

  const renderQuickServiceItem = ({ item }: any) => (
    <TouchableOpacity style={styles.serviceItem}>
      <Image style={styles.serviceIcon} source={item.icon} />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quickServices}
        renderItem={renderQuickServiceItem}
        numColumns={2} // Always use 2 columns
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.serviceRow}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default QuickServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(10),
  },
  serviceRow: {
    justifyContent: "space-between",
    marginBottom: normalize(15),
  },
  serviceItem: {
    backgroundColor: "#FFF",
    borderRadius: normalize(12),
    alignItems: "center",
    justifyContent: "center",
    width: (SCREEN_WIDTH - normalize(48)) / 2, // Fixed 2-column layout, ensuring the width is consistent across devices
    height: SCREEN_HEIGHT * 0.2, // Proportional height based on screen size to maintain a consistent look
    // padding: normalize(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    width: normalize(50), // Scalable icon size
    height: normalize(50), // Scalable icon size
    resizeMode: "contain",
    marginBottom: normalize(8),
  },
  serviceName: {
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.medium), // Responsive font size for name
    fontWeight: "bold",
    color: COLORS.HeadingColor,
    letterSpacing: 1,
  },
  serviceDescription: {
    fontFamily: "InterFonts",
    // fontSize: normalize(FONT_SIZE.small), // Responsive font size for description
    color: COLORS.GrayColor,
    textAlign: "center",
    marginTop: normalize(5),
    width: normalize(130),
  },
});
