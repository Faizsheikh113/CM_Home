import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface CustomSearchBarProps {
  placeholder: string;
  onSearch?: (text: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  placeholder,
  onSearch,
}) => {
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenWidth * 0.05, // Dynamic horizontal padding based on screen width
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: screenWidth * 0.04, // Dynamic border radius based on screen width
    paddingVertical: screenWidth * 0.02, // Dynamic vertical padding based on screen width
    paddingHorizontal: screenWidth * 0.05, // Dynamic horizontal padding based on screen width
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: screenWidth * 0.03, // Dynamic margin based on screen width
    width: screenWidth * 0.06, // Dynamic icon size based on screen width
    height: screenWidth * 0.06, // Dynamic icon size based on screen width
  },
  input: {
    flex: 1,
    fontSize: screenWidth * 0.04, // Dynamic font size based on screen width
    color: "#333",
  },
});

export default CustomSearchBar;
