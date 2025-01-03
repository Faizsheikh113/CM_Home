import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const QuickServices: React.FC = () => {
  // Local Data for Quick Services
  const quickServices = [
    {
      id: 1,
      name: "Quizzes",
      icon: require("../../assets/images/Quizes.png"),
      description: "Your fun & earn in one place",
    },
    {
      id: 2,
      name: "Health",
      icon: require("../../assets/images/Health.png"),
      description: "Stay healthy, unstoppable!",
    },
    {
      id: 3,
      name: "Baby Care",
      icon: require("../../assets/images/Baby Care.png"),
      description: "Parenting made easier!",
    },
    {
      id: 4,
      name: "Courses",
      icon: require("../../assets/images/Courses.png"),
      description: "Learn smarter, not harder!",
    },
  ];

  const handleServicePress = (service: any) => {
    alert(`You pressed on ${service.name}`);
  };

  const renderQuickServiceItem = ({ item }: any) => (
    <TouchableOpacity style={styles.serviceItem} onPress={() => handleServicePress(item)}>
      <Image style={styles.serviceIcon} source={item.icon} />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>🚀 Quick Services</Text>
        <TouchableOpacity>
          <Text style={styles.explore}>Explore all</Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={quickServices}
        renderItem={renderQuickServiceItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.serviceRow}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default QuickServices;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  explore: {
    fontSize: 14,
    color: "#007BFF",
  },
  serviceRow: {
    justifyContent: "space-between",
  },
  serviceItem: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    width: screenWidth * 0.42,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  serviceDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});
