import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, PixelRatio } from "react-native";
import { COLORS } from "@/assets/Constants/Colors";
import { useFonts } from "expo-font";

// Get screen dimensions for responsive design
const { width } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

interface HeaderProps {
  title: string;
  showShare?: boolean;
  showSave?: boolean;
  onBackPress: () => void;
  onSharePress?: () => void;
  onSavePress?: () => void;
}

const CustomBackButton: React.FC<HeaderProps> = ({
  title,
  showShare = false,
  showSave = false,
  onBackPress,
  onSharePress,
  onSavePress,
}) => {
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }
  return (
    <LinearGradient
      colors={["#F9FAA9", "#FFF5E7", "#F6F6F6"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        {/* Back Button */}
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons
            name="chevron-back-outline"
            size={normalize(20)}
            color="#000"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Share and Save Buttons */}
        {showShare && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onSharePress} style={styles.iconButton}>
              <Ionicons
                name="share-social-outline"
                size={normalize(20)}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        )}
        {showSave && (
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={onSavePress} style={styles.iconButton}>
              <Ionicons
                name="bookmark-outline"
                size={normalize(20)}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: normalize(100), // Adjust height dynamically
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? normalize(10) : 0,
    // marginTop: normalize(10), // Add margin from the top
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalize(16),
  },
  backButton: {
    padding: normalize(8),
    borderColor: COLORS.GrayColor,
    borderWidth: 0.5,
    backgroundColor: COLORS.WhiteColor,
    borderRadius: normalize(8),
  },
  title: {
    fontFamily: "InterFonts",
    fontSize: normalize(16),
    fontWeight: "500",
    color: COLORS.HeadingColor,
    textAlign: "center",
    marginHorizontal: normalize(8),
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.GrayColor,
    borderWidth: 0.5,
    backgroundColor: COLORS.WhiteColor,
    borderRadius: normalize(8),
    marginLeft: normalize(8),
  },
  iconButton: {
    padding: normalize(8),
  },
});


export default CustomBackButton;
