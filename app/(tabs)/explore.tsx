import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  ActivityIndicator,
  PixelRatio,
} from "react-native";
import { FONT_SIZE } from "@/assets/fonts/Constants";
import Header from "@/components/ReusableComponent/CustomHeader";
import CustomSearchBar from "@/components/ReusableComponent/CustomSearchBar";
import { useFonts } from "expo-font";

// Get screen dimensions
const { width } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Check if the device screen is large (e.g., foldable devices)
const isLargeScreen = width > 600; // Adjust the threshold as per requirement

const getLocationContainerWidth = () => {
  if (isLargeScreen) {
    return (400 / 375) * width; // More width for large screens
  }
  return (357 / 375) * width; // Default width for smaller screens
};

const getTextMarginTop = () => {
  if (isLargeScreen) {
    return normalize(10); // More margin top for large screens
  }
  return normalize(8); // Default margin top for smaller screens
};

const HomeScreen = () => {
  const [loaded] = useFonts({
    InterFonts: require('../../assets/fonts/Inter_18pt-Regular.ttf')
  });
  if (!loaded) {
    return null
  }
  // const [activeTab, setActiveTab] = useState("Details");
  // const [schemeData, setSchemeData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [searchParams] = useSearchParams();

  // const Id = Number(searchParams[1]);
  // console.log("Received ID:", Id);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://16.171.21.224:4000/api/scheme/${Id}`
  //       );
  //       setSchemeData(response.data);
  //       setError(null);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to fetch scheme details.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [Id]);

  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color={COLORS.HeadingColor} />
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorText}>{error}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Custom Header */}
        <Header
          buttonLabel="Man ki Baat"
          profileImageUrl="https://via.placeholder.com/40x40"
          onButtonPress={() => alert("Man ki Baat pressed!")}
          onProfilePress={() => alert("Profile pressed!")}
        />
        {/* Search Bar */}
        <CustomSearchBar
          placeholder="Search for 'NEAR BY HEALTH CENTER'"
          onSearch={(text) => console.log("Search Text:", text)}
        />
        {/* Location and Change Button Section */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Anand Vihar, Street 4, Delhi (492001)
          </Text>
          <TouchableOpacity onPress={() => alert("Change button pressed!")}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center",alignItems:'center',alignContent:'center',alignSelf:'center' }}>
          <Text style={{ flex: 1, justifyContent: "center",alignItems:'center',alignContent:'center',alignSelf:'center' }}>Helpline Page</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: Platform.OS === "android" ? normalize(0) : normalize(0),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: normalize(16),
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getTextMarginTop(), // Adjust margin top dynamically
    width: getLocationContainerWidth(), // Dynamically calculate width
    height: normalize(24), // Adjust height proportionally
    alignSelf: "center",
    paddingHorizontal: normalize(20), // Adjust padding horizontally
  },
  locationText: {
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.small), // Responsive font size
    color: "#BAC4D2",
  },
  changeText: {
    fontFamily: "InterFonts",
    fontSize: normalize(FONT_SIZE.small), // Responsive font size
    color: "#B48D3E",
    fontWeight: "bold",
  },
});

export default HomeScreen;
