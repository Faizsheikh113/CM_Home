import { LinearGradient } from "expo-linear-gradient";
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

const { width, height } = Dimensions.get("window");

interface HeaderProps {
  buttonLabel: string;
  profileImageUrl: string;
  languageText: string;
  onButtonPress?: () => void;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  buttonLabel,
  profileImageUrl,
  languageText,
  onButtonPress,
  onProfilePress,
}) => {
  return (
    <LinearGradient
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        {/* Logo */}
        <Image
          source={require("../../assets/images/Emblem_of_Madhya_Pradesh.png")}
          style={styles.logo}
        />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: {
    height: height * 0.12, // Dynamic height based on screen size
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05, // 5% of screen width
  },
  logo: {
    width: width * 0.15,
    height: width * 0.15,
  },
  translateLogo: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: width * 0.05,
  },
  button: {
    backgroundColor: "#B89449",
    borderRadius: width * 0.1,
    borderBottomLeftRadius: 0,
    paddingVertical: height * 0.01, // 1% of screen height
    paddingHorizontal: width * 0.05,
    marginRight: width * 0.1, // 10% of screen width
    borderColor: "#DFAF4D",
    borderWidth: 2,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: width * 0.04, // Scaled font size
  },
  languageProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06, // Fully circular
    borderWidth: 2,
    borderColor: "#B89449",
  },
});

export default Header;
