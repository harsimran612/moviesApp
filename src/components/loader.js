import { View, Text, StyleSheet } from "react-native";

const PageLoader = () => {
 
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Loading results</Text>
    </View>
  );
};

export default PageLoader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
