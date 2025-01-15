import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PixelRatio } from "react-native";
import { FONT_SIZE, } from "@/assets/fonts/Constants";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/assets/Constants/Colors";
import { useFonts } from "expo-font";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Normalize function for consistent scaling
function normalize(size: number) {
  return Math.round(PixelRatio.roundToNearestPixel(size * (screenWidth / 375)));
}

const isLargeScreen = screenWidth > 600; // Detect foldable or large screen devices

const getButtonWidth = () => {
  if (isLargeScreen) {
    return normalize(150); // Increase button size for larger screens (foldables)
  }
  return normalize(120); // Default button width for smaller screens
};

const getPadding = () => {
  if (isLargeScreen) {
    return normalize(24); // More padding for larger screens
  }
  return normalize(16); // Default padding for smaller screens
};

const getLogoSize = () => {
  if (isLargeScreen) {
    return normalize(60); // Larger logo for foldable devices
  }
  return normalize(45); // Default logo size for smaller screens
};

interface HeaderProps {
  buttonLabel: string;
  profileImageUrl: string;
  onButtonPress?: () => void;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  buttonLabel,
  profileImageUrl,
  onButtonPress,
  onProfilePress,
}) => {
    const [loaded] = useFonts({
      InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
    });
    if (!loaded) {
      return null
    }
  const styles = StyleSheet.create({
    container: {
      height: screenHeight * 0.12,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: getPadding(), // Dynamic padding
    },
    logoStyle: {
      alignItems: "center",
      flexDirection: "row",
    },
    logo: {
      width: getLogoSize(), // Dynamic logo size
      height: getLogoSize(), // Dynamic logo size
      resizeMode: "contain",
    },
    button: {
      flexDirection:'row',
      backgroundColor: "#B89449",
      borderRadius: normalize(20),
      borderBottomLeftRadius: 0,
      justifyContent: "flex-start",
      alignItems: "center",
      borderColor: "#DFAF4D",
      borderWidth: 2,
      padding: normalize(5),
      marginHorizontal: 15,
    },
    buttonText: {
      paddingHorizontal: 13,
      fontFamily: "InterFonts",
      color: "#FFF",
      fontWeight: "600",
      fontSize: normalize(FONT_SIZE.small),
    },
    translateLogo: {
      width: normalize(30),
      height: normalize(30),
      marginRight: normalize(12),
      resizeMode: "contain",
    },
    profileImage: {
      width: normalize(35),
      height: normalize(35),
      borderRadius: normalize(17.5),
      borderWidth: 2,
      borderColor: "#B89449",
    },
    languageProfileContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <LinearGradient
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6"]}
      start={{ x: 0.5, y: -0.5 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        {/* Logo */}
        <View style={styles.logoStyle}>
          <Image
            source={require("../../assets/images/Emblem_of_Madhya_Pradesh.png")}
            style={styles.logo}
          />

          {/* Button */}
          <TouchableOpacity onPress={onButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
            <Ionicons name="chevron-forward" size={20} color={COLORS.WhiteColor}/>
          </TouchableOpacity>
        </View>

        {/* Language and Profile */}
        <View style={styles.languageProfileContainer}>
          <TouchableOpacity onPress={onButtonPress}>
            <Image
              source={require("../../assets/images/translate-hindi.png")}
              style={styles.translateLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={{ uri: profileImageUrl }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;
