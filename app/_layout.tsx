import { Tabs, useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter()
  
  return (
    <Tabs>
      {/* <Tabs.Screen name="index" /> */}
      <Tabs.Screen name="index" options={{title:"Movie"}} />
      <Tabs.Screen name="showtime" options={{title:"Show Time"}} />
    </Tabs>
  );
}
