import getData from "@/helpers/getData";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, StyleSheet, Image } from "react-native";

export default function Showtime() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = React.useState<any>({});
  const [showtimes, setShowtimes] = React.useState([]);

  const fetchData = async () => {
    const [respMovie, respActor, respCategory, respShowtime] =
      await Promise.all([
        getData("movie"),
        getData("actor"),
        getData("category"),
        getData("showtime"),
      ]);

    const data: any = respMovie.find((m) => m.id === id);
    const actor: any = respActor.find((m) => m.id === data.actor_id);
    const cate: any = respCategory.find((m) => m.id === data.category_id);
    const showtimefilter: any = respShowtime.filter(
      (m: any) => m.movie_id === id
    );

    let newData = {
      ...data,
      actor_name: actor.actor_name,
      category_name: cate.category_name,
    };

    setMovie(newData);
    setShowtimes(showtimefilter);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Image source={{ uri: movie.movie_img }} style={styles.imgMovie} />
      <Text>{movie.movie_name}</Text>
      <Text>{movie.actor_name}</Text>
      <Text>{movie.category_name}</Text>
      {showtimes &&
        showtimes.map((st: any) => {
          const timeParts = st.showtime_timedate.split(" ");
          const time = timeParts[1];
          const AMandPM = timeParts[2];
          return (
            <Text key={st.id}>
              {time} {AMandPM}
            </Text>
          );
        })}
    </>
  );
}

const styles = StyleSheet.create({
  imgMovie: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
