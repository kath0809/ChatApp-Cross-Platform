import { View, Text } from "react-native";
import { Stack } from "expo-router";
import Home from "./home";
import HomeHeader from "@/components/HomeHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ header: () => <HomeHeader /> }} />
    </Stack>
  );
}
