import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Custom Components
import Header from "@/components/ReusableComponent/CustomHeader";
import CustomSearchBar from "@/components/ReusableComponent/CustomSearchBar";
import ImageCard from "@/components/ReusableComponent/CustomCardImage";
import RowListButtonReusable, {
  SectionHeader,
} from "@/components/ReusableComponent/CustomReusableSchema";
import FabButton from "@/components/ReusableComponent/CustomFABButton";

// Redux Actions
import { fetchSchemes } from "@/Redux/Sclise/SchemeSclise";

// Local Assets
import LocalImage from "../../assets/images/ScheamPageImage.png";
import HorizontalTabBar from "@/components/ReusableComponent/customHorizontalBar";
import { COLORS } from "@/assets/Constants/Colors";
import { FONT_SIZE, InterFont } from "@/assets/fonts/Constants";
import { router } from "expo-router";
// import { normalize } from "../../assets/Constants/Responsive";

// Get screen dimensions for responsive design
const { width, height } = Dimensions.get("window");

// Normalize function for consistent scaling
const normalize = (size: number) => {
  const scale = width / 375; // Base design width is 375 (for reference)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Categories");

  const data = [
    { id: "1", image: require("../../assets/images/SchemaSchollarImage.png") },
    { id: "2", image: require("../../assets/images/SchemaSchollarImage.png") },
    { id: "3", image: require("../../assets/images/SchemaSchollarImage.png") },
  ];

  const categories = ["Categories", "State", "Central Ministeries"];

  // Get data, loading, and error states from Redux store
  const { schemes, loading, error } = useSelector(
    (state: any) => state.schemes
  );

  // Dispatch the fetchSchemes action when the component mounts
  useEffect(() => {
    dispatch(fetchSchemes());
  }, [dispatch]);

  // Handle FAB button press
  const handleFabPress = () => {
    console.log("FAB clicked!");
  };

  // Custom List Item Component
  const CustomListItem = ({
    imageUri,
    title,
    subtitle,
    onPress,
  }: {
    imageUri: any;
    title: string;
    subtitle: string;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity style={styles.listItem} onPress={onPress}>
        <Image source={imageUri} style={styles.listIcon} />
        <View style={styles.listTextContainer}>
          <Text style={styles.listTitle}>{title}</Text>
          <Text style={styles.listSubtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Render content based on state
  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator size="large" color="#01579b" style={styles.loader} />
      );
    }

    if (error) {
      return <Text style={styles.errorText}>Failed to load schemes.</Text>;
    }

    const renderItem = ({ item }: any) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
      </View>
    );

    return (
      <>
        {/* Trending Schemes */}
        <SectionHeader
          title="🔥 Recommended Schemes"
          onExplorePress={() => console.log("Explore all Trending Schemes")}
        />

        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.horizontalListContainer}
        />

        <SectionHeader
          title="🔥 Trending Schemes"
          onExplorePress={() => console.log("Explore all Trending Schemes")}
        />
        <RowListButtonReusable
          listData={schemes}
          renderItem={({ item }) => (
            <CustomListItem
              key={item.id}
              imageUri={`http://13.48.43.231/api/uploads/images/scheme/${item.images[0]}`}
              title={item.schemeTitle}
              subtitle={item.schemeDetails}
              onPress={() => {
                console.log(`${item.schemeTitle} ${item?.id} pressed`);
                router.push(`/(tabs)/explore?id=${item?.id}` as any);
              }}
            />
          )}
        />

        {/* Other Schemes */}
        <SectionHeader
          title="🔥 Other Schemes"
          onExplorePress={() => console.log("Explore all Other Schemes")}
        />
        <HorizontalTabBar
          data={categories}
          activeTab={activeTab}
          onTabPress={(tab) => setActiveTab(tab)}
        />
        <RowListButtonReusable
          listData={schemes}
          renderItem={({ item }) => (
            <CustomListItem
              imageUri={`http://13.48.43.231/api/uploads/images/scheme/${item.images[0]}`}
              title={item.schemeTitle}
              subtitle={item.schemeDetails}
              onPress={() => {
                console.log(`${item.schemeTitle}${item.id} pressed`);
                router.push(`/(tabs)/explore?id=${item?.id}` as any);
              }}
            />
          )}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header
          buttonLabel="Man ki Baat"
          profileImageUrl="https://via.placeholder.com/40x40"
          onButtonPress={() => alert("Man ki Baat pressed!")}
          onProfilePress={() => alert("Profile pressed!")}
        />

        {/* Search Bar */}
        <CustomSearchBar
          placeholder="Search for Latest News"
          onSearch={(text) => console.log("Search Text:", text)}
        />

        <TouchableOpacity style={styles.FilterButton}>
          <Image
            source={require("../../assets/images/Filter_Icon.png")}
            style={styles.filterIcon}
          />
          <Text style={styles.filterText}>Explore Eligible Schemes</Text>
        </TouchableOpacity>

        {/* Featured Image */}
        <ImageCard
          imageUri={LocalImage}
          cardStyle={styles.cardStyle}
          imageStyle={styles.imageStyle}
        />

        {/* Content */}
        {renderContent()}

        {/* Floating Action Button */}
      </ScrollView>
      <FabButton onPress={handleFabPress} />
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BackGroundColor,
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  loader: {
    marginVertical: normalize(16),
  },
  errorText: {
    fontSize: normalize(FONT_SIZE.small),
    color: "red",
    textAlign: "center",
    marginVertical: normalize(16),
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.WhiteColor,
    borderRadius: normalize(10),
    padding: normalize(16),
    paddingHorizontal: normalize(16),
    marginBottom: normalize(8),
    elevation: 1,
  },
  FilterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.WhiteColor,
    borderRadius: normalize(10),
    padding: normalize(16),
    marginTop: normalize(24),
    marginHorizontal: normalize(16),
    elevation: 1,
    borderColor: "#B89449",
    borderWidth: 1,
  },
  filterIcon: {
    width: normalize(30),
    height: normalize(30),
  },
  filterText: {
    fontSize: normalize(14),
    fontWeight: "600",
    color: "#B89449",
    marginLeft: normalize(16),
  },
  listIcon: {
    width: normalize(40),
    height: normalize(40),
    marginRight: normalize(16),
  },
  listTextContainer: {
    flex: 1,
    paddingHorizontal: normalize(10),
  },
  listTitle: {
    fontSize: normalize(FONT_SIZE.medium),
    fontWeight: "600",
    color: COLORS.HeadingColor,
  },
  listSubtitle: {
    fontSize: normalize(FONT_SIZE.small),
    color: COLORS.LightGrayColor,
    marginTop: normalize(8),
  },
  cardStyle: {
    marginVertical: normalize(24),
  },
  imageStyle: {
    width: "100%",
    height: height * 0.25,
  },
  horizontalListContainer: {
    paddingHorizontal: normalize(16),
  },
  card: {
    width: width * 0.7,
    marginHorizontal: normalize(16),
    borderRadius: normalize(10),
    overflow: "hidden",
    backgroundColor: COLORS.WhiteColor,
  },
  image: {
    // flex:1,
    width: "100%",
    height: height * 0.15,
    resizeMode:'stretch'
  },
});
