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
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
export default function HomeScreen() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Categories");

  const data = [
    {
      id: "1",
      image: "https://via.placeholder.com/350x150", // Replace with actual image URLs
    },
    {
      id: "2",
      image: "https://via.placeholder.com/350x150",
    },
    {
      id: "3",
      image: "https://via.placeholder.com/350x150",
    },
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
    // Determine the source of the image
    // const imageSource =
    //   typeof icon === "string" && icon.startsWith("http")
    //     ? { uri: icon } // Remote URL
    //     : icon; // Local image

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
        <Image source={{ uri: item.image }} style={styles.image} />
        {/* <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View> */}
      </View>
    );

    return (
      <>
        {/* Trending Schemes */}
        <SectionHeader
          title="🔥 Recommended Schemes"
          onExplorePress={() => console.log("Explore all Trending Schemes")}
        />

        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <FlatList
            // ref={flatListRef}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>

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
              onPress={() => console.log(`${item.schemeTitle} pressed`)}
            />
          )}
          customStyles={{
            sectionTitleStyle: { color: "#01579b" },
            exploreTextStyle: { color: "#ff5722" },
          }}
        />

        {/* Other Schemes */}
        <SectionHeader
          title="🔥 Other Schemes"
          onExplorePress={() => console.log("Explore all Other Schemes")}
        />
        {/* Horizontal Tabs */}
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
              onPress={() => console.log(`${item.schemeTitle} pressed`)}
            />
          )}
          customStyles={{
            sectionTitleStyle: { color: "#01579b" },
            exploreTextStyle: { color: "#ff5722" },
          }}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header
          buttonLabel="Man ki Baat"
          profileImageUrl="https://via.placeholder.com/40x40"
          languageText="HI | अ"
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
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#B89449",
              marginLeft: 20,
            }}
          >
            Explore Eligible Schemes
          </Text>
        </TouchableOpacity>

        {/* Featured Image */}
        <ImageCard
          imageUri={LocalImage}
          cardStyle={styles.cardStyle}
          imageStyle={styles.imageStyle}
          TextComponent={undefined}
        />

        {/* Content */}
        {renderContent()}

        {/* Floating Action Button */}
      </ScrollView>
      <FabButton onPress={handleFabPress} />
    </SafeAreaView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
  loader: {
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginVertical: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    elevation: 1,
  },
  FilterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginVertical: 5,
    marginHorizontal: 16,
    elevation: 1,
    borderColor: "#B89449",
    borderWidth: 1,
  },
  listIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  listTextContainer: {
    flex: 1,
    // alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  listSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  cardStyle: {
    marginVertical: 16,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  card: {
    // paddingHorizontal: 10,
    width: width * 0.7,
    marginHorizontal: width * 0.04,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 100,
  },
});
