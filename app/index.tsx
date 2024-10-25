import { Link, Navigator, Stack } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export default function StartPage() {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" color="green" />
    </View>
  );
}
