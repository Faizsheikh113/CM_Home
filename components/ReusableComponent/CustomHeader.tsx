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
import { FONT_SIZE, InterFont } from "@/assets/fonts/Constants";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

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
      backgroundColor: "#B89449",
      borderRadius: normalize(20),
      borderBottomLeftRadius: 0,
      justifyContent: "flex-start",
      alignItems: "center",
      borderColor: "#DFAF4D",
      borderWidth: 2,
      padding: normalize(5),
      marginHorizontal: 10,
    },
    buttonText: {
      fontFamily: "Inter_400Regular",
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
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
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
