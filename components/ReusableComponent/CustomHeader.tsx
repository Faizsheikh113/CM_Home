import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

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
        <TouchableOpacity  onPress={onButtonPress}>
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
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 15,
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
