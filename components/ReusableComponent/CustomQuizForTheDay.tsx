import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE } from "@/assets/fonts/Constants";
import { useFonts } from "expo-font";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

interface QuizCardProps {
  title: string;
  lastDate: string;
  questionCount: number;
  duration: number;
  thumbnail: string;
  onParticipate: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  lastDate,
  questionCount,
  duration,
  thumbnail,
  onParticipate,
}) => {
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }
  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/QuizImage.png")}
          style={styles.thumbnail}
          height={normalize(105)}
          width={normalize(205)}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>LAST DATE {lastDate}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.Questioncontainer}>
              <Image
                source={require("../../assets/images/fe_question.png")}
                style={styles.QueImage}
              />
              <View style={styles.contentGap}>
                <Text>{questionCount}</Text>
                <Text style={styles.detailsTime}>Questions</Text>
              </View>
            </View>
            <View style={styles.Questioncontainer}>
              <Image
                source={require("../../assets/images/fe_question.png")}
                style={styles.QueImage}
              />
              <View style={styles.contentGap}>
                <Text>{duration}</Text>
                <Text
                  style={styles.detailsTime}
                  numberOfLines={2}
                  lineBreakMode="tail"
                >
                  Durations
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onParticipate}>
        <Text style={styles.buttonText}>Participate Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    paddingHorizontal: normalize(16), // Dynamic padding based on screen size
    paddingVertical: normalize(10),
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: normalize(12),
    marginBottom: normalize(15),
    overflow: "hidden",
    elevation: 3,
  },
  Questioncontainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  thumbnail: {
    // flex: 1,
    // width: normalize(105), // Dynamic width based on screen size
    // height: normalize(125), // Dynamic height based on screen size
    alignSelf:'center'
  },
  QueImage: {
    width: normalize(24),
    height: normalize(24),
  },
  content: {
    padding: normalize(10),
    paddingHorizontal:normalize(10) // Dynamic padding for content
  },
  contentGap: {
    paddingLeft: normalize(8), // Dynamic padding for content
  },
  title: {
    // paddingHorizontal:normalize(10) ,// Dynamic padding for content
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.medium), // Dynamic font size
    fontWeight: "bold",
    color: COLORS.HeadingColor,
  },
  details: {
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.small), // Dynamic font size for details
    color: "#3DABF9",
    fontWeight: "600",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: normalize(5), // Dynamic marginTop
    padding: normalize(2),
  },
  detailsTime: {
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.small), // Dynamic font size for details
    color: COLORS.GrayColor,
    fontWeight: "600",
    width: normalize(70),
  },
  button: {
    paddingVertical: normalize(8), // Dynamic padding for button
    borderRadius: normalize(12), // Dynamic border radius
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B89449",
  },
  buttonText: {
    fontFamily: "InterFonts",
    color: "#B89449",
    fontWeight: "bold",
    fontSize: normalize(FONT_SIZE.small), // Dynamic font size for button text
  },
});

export default QuizCard;
