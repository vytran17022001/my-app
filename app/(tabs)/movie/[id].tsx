import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Showtime() {
    const router = useRouter();
    const {id} = useLocalSearchParams();

return (
    <>
<Text>{id}Hello</Text>
    </>
)
}