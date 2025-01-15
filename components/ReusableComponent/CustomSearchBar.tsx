import { FONT_SIZE, InterFont } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";
import React from "react";
import { View, TextInput, StyleSheet, Image, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Check if the device screen is large (e.g., foldable devices)
const isLargeScreen = width > 600; // Adjust the threshold as per requirement

const getSearchBoxPadding = () => {
  if (isLargeScreen) {
    return normalize(20); // More padding for larger devices (e.g., foldables)
  }
  return normalize(16); // Default padding for smaller devices
};

const getIconSize = () => {
  if (isLargeScreen) {
    return normalize(30); // Larger icon for foldables or large devices
  }
  return normalize(24); // Default icon size for small to medium devices
};

const getInputFontSize = () => {
  if (isLargeScreen) {
    return normalize(FONT_SIZE.medium); // Larger font for larger devices
  }
  return normalize(FONT_SIZE.small); // Default font size for small to medium devices
};

interface CustomSearchBarProps {
  placeholder: string;
  onSearch?: (text: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder,
  onSearch,
}) => {
    const [loaded] = useFonts({
      InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
    });
    if (!loaded) {
      return null
    }
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: getSearchBoxPadding(), // Responsive padding
      marginTop: normalize(5), // Adjust margin top for consistency
    },
    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
      borderRadius: normalize(12), // Responsive border radius
      borderColor: "#D0CFCF",
      paddingHorizontal: getSearchBoxPadding(), // Dynamic padding inside the search box
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    searchIcon: {
      width: getIconSize(), // Responsive icon size
      height: getIconSize(), // Responsive icon size
      alignItems: "center",
    },
    input: {
      fontFamily: 'InterFonts',
      fontWeight: "600",
      fontSize: getInputFontSize(), // Responsive font size for input
      flex: 1, // To ensure the input field takes up remaining space
    },
  });

  return (
    <View style={styles.container}>
      {/* Search Input Section */}
      <View style={styles.searchBox}>
        <Image
          source={require("../../assets/images/search.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default CustomSearchBar;
