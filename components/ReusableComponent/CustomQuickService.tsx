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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenWidth * 0.04, // Dynamic padding
    paddingVertical: screenWidth * 0.02,
  },
  serviceRow: {
    justifyContent: "space-between",
    marginBottom: screenWidth * 0.03, // Dynamic spacing between rows
  },
  serviceItem: {
    backgroundColor: "#FFF",
    borderRadius: screenWidth * 0.03, // Dynamic border radius
    padding: screenWidth * 0.04, // Dynamic padding
    alignItems: "center",
    width: screenWidth * 0.42, // Adjusted width for better responsiveness
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  serviceIcon: {
    width: screenWidth * 0.15, // Dynamic size for icons
    height: screenWidth * 0.15,
    marginBottom: screenWidth * 0.02, // Dynamic margin
    resizeMode: "contain",
  },
  serviceName: {
    fontSize: screenWidth * 0.045, // Dynamic font size
    fontWeight: "bold",
    color: "#333",
  },
  serviceDescription: {
    fontSize: screenWidth * 0.035, // Dynamic font size for description
    color: "#666",
    textAlign: "center",
    marginTop: screenWidth * 0.02, // Dynamic margin
  },
});
