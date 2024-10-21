// app/index.ts
import React from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import getData from "@/helpers/getData";
import { Link } from "expo-router";

export default function Tab() {
  const [movies, setMovies] = React.useState([]);

  const fetchData = async () => {
    const result: any = await getData("movie");
    setMovies(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        movies.map((d: any) => (
          <View key={d.id}>
            <Text>Movie {d.id}:</Text>
            <Text>{d.movie_name}</Text>
            <Image source={{ uri: d.movie_img }} style={styles.imgMovie} />
            <Link href={`/movie/${d.id}`}>Click</Link>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imgMovie: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
