import { LinearGradient } from "expo-linear-gradient";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";

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
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6",]} // Light gradient colors
      start={{ x: 1, y: 0 }} // Start from the top-left
      end={{ x: 1, y: 1 }} // End at the top-right
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
              style={styles.Translate_Logo}
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
    height: 100, // Adjust this value to make the gradient extend further down
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    // paddingTop: 25,
    // marginTop: 15,
  },
  logo: {
    width: 53,
    height: 53,
  },
  Translate_Logo: {
    width: 33,
    height: 33,
    marginRight: 20,
  },
  button: {
    backgroundColor: "#B89449",
    borderRadius: 100,
    borderBottomLeftRadius: 0,
    paddingVertical: "2.5%",
    paddingHorizontal: "5%",
    marginRight: "20%",
    borderColor: "#DFAF4D",
    borderWidth: 3,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "condensedBold",
    fontSize: 14,
  },
  languageProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingLeft: 50,
  },
  languageText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#B89449",
    marginHorizontal: "10%",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#B89449",
  },
});

export default Header;
