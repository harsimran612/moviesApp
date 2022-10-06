import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PageLoader from "../components/loader";
import { getDetail } from "../utils/api-call";
import { MOVIE_DB_API_IMAGE_BASE_URL } from "../utils/constants";

const DetailScreen = ({ route }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getDetail(route.params.id, route.params.type);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <PageLoader />
      ) : (
        <View style={styles.mainContainer}>
          <Text style={styles.title}>
            {data.title || data.originalName || data.name}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri:
                MOVIE_DB_API_IMAGE_BASE_URL +
                "w154" +
                (data.poster_path || data.profile_path),
            }}
          />
          <Text style={styles.description}>
            {data.overview || data.biography}
          </Text>
          <Text style={styles.stats}>
            Popularity: {data.popularity} |{" "}
            {"person" === route.params.type ? "Birth Date" : "Release Date"}:{" "}
            {/* release_date: for Movies, birthday: for People Search (in Multi Search), first_air_date: for TV Search */}
            {data.release_date || data.birthday || data.first_air_date} 
          </Text>
        </View>
      )}
    </ScrollView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    marginTop: 35,
  },
  description: {
    width: 300,
    marginTop: 25,
    lineHeight: 22,
  },
  stats: {
    width: 300,
    marginTop: 30,
  },
});
