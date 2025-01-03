import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const BannerCard = ({ imageUri, title, subtitle }: any) => (
  <View style={styles.bannerCard}>
    <Image source={imageUri} style={styles.bannerImage} />
    <View style={styles.bannerTextContainer}>
      <Text style={styles.bannerTitle}>{title}</Text>
      <Text style={styles.bannerSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

export const SectionHeader = ({ title, onExplorePress }: any) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {onExplorePress && (
      <TouchableOpacity onPress={onExplorePress}>
        <Text style={styles.exploreText}>Explore all</Text>
      </TouchableOpacity>
    )}
  </View>
);

export const ListItem = ({ icon, title, subtitle, onPress }: any) => (
  <TouchableOpacity style={styles.listItem} onPress={onPress}>
    <Image source={icon} style={styles.listIcon} />
    <View style={styles.listTextContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <Text style={styles.listSubtitle}>{subtitle}</Text>
    </View>
    <Text style={styles.listArrow}>›</Text>
  </TouchableOpacity>
);

const ReusableComponent = ({ listData }: any) => {
  // const schemes = [
  //   {
  //     id: "1",
  //     icon: require("../../assets/images/icon.png"),
  //     title: "Pradhan Mantri Awass Yojna",
  //     subtitle: "Ministry of Housing & Urban Affairs",
  //   },
  //   {
  //     id: "2",
  //     icon: require("../../assets/images/icon.png"),
  //     title: "Pradhan Mantri Awass Yojna",
  //     subtitle: "Ministry of Housing & Urban Affairs",
  //   },
  //   {
  //     id: "3",
  //     icon: require("../../assets/images/icon.png"),
  //     title: "Pradhan Mantri Awass Yojna",
  //     subtitle: "Ministry of Housing & Urban Affairs",
  //   },
  // ];

  console.log("Reusable Component :- ", listData);

  return (
    <View style={styles.container}>
      {/* Banner */}
      {/* <BannerCard
        imageUri={require("../../assets/images/icon.png")} // Replace with your local banner path
        title="Unlocking opportunities, Empowering Lives"
        subtitle="Explore schemes for SC ST"
      /> */}

      {/* List */}
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            icon={item.icon}
            title={item.schemeTitle}
            subtitle={item.schemeDetails}
            onPress={() => console.log(`${item.schemeTitle} pressed`)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  bannerCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  bannerTextContainer: {
    padding: 16,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  exploreText: {
    fontSize: 14,
    color: "#B89449",
    fontWeight: "600",
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
  listIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: "#000",
  },
  listSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  listArrow: {
    fontSize: 18,
    color: "#ccc",
    fontWeight: "bold",
  },
});

export default ReusableComponent;
