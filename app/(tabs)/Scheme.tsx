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

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Categories");

  const data = [
    { id: "1", image: "https://via.placeholder.com/350x150" },
    { id: "2", image: "https://via.placeholder.com/350x150" },
    { id: "3", image: "https://via.placeholder.com/350x150" },
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
        <Image source={{ uri: item.image }} style={styles.image} />
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
              onPress={() => console.log(`${item.schemeTitle} pressed`)}
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
              onPress={() => console.log(`${item.schemeTitle} pressed`)}
            />
          )}
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
    fontSize: width * 0.04,
    color: "red",
    textAlign: "center",
    marginVertical: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: width * 0.02,
    elevation: 1,
  },
  FilterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: width * 0.04,
    marginTop: width * 0.05,
    marginHorizontal: width * 0.04,
    elevation: 1,
    borderColor: "#B89449",
    borderWidth: 1,
  },
  filterIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  filterText: {
    fontSize: width * 0.035,
    fontWeight: "600",
    color: "#B89449",
    marginLeft: width * 0.05,
  },
  listIcon: {
    width: width * 0.1,
    height: width * 0.1,
    marginRight: width * 0.05,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: width * 0.04,
    fontWeight: "600",
    color: "#000",
  },
  listSubtitle: {
    fontSize: width * 0.035,
    color: "#666",
    marginTop: width * 0.01,
  },
  cardStyle: {
    marginVertical: width * 0.05,
  },
  imageStyle: {
    width: "100%",
    height: height * 0.25,
  },
  horizontalListContainer: {
    paddingHorizontal: width * 0.04,
  },
  card: {
    width: width * 0.7,
    marginHorizontal: width * 0.04,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: height * 0.15,
  },
});
