import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BUTTON_COLOR, MOVIE_DB_API_IMAGE_BASE_URL } from "../utils/constants";

const ListTile = ({ id, title, popularity, date, imageUrl, type }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.listTile}>
      <Image
        style={styles.image}
        source={{
          uri: MOVIE_DB_API_IMAGE_BASE_URL + "w154" + imageUrl,
        }}
      />
      <View style={styles.rightSideContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Popularity: {popularity}</Text>
        <Text style={styles.subtitle}>
          {"person" === type ? " " : "Release Date:"} {date}
        </Text>
        <Button
          style={styles.button}
          title="More Details"
          onPress={() => {
            navigation.navigate("Detail", {
              id,
              type,
              title,
            });
          }}
        >
          
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  rightSideContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: "#2e2e2e",
  },
  button: {
    width: "90%",
    backgroundColor: BUTTON_COLOR,
    padding: 10,
    borderRadius: 3,
    alignItems: "center",
    fontSize: 8
  },
  buttonText: {
    color: "white",
  },
});

export default ListTile;
