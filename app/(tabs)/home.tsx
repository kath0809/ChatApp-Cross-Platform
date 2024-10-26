import { useAuth } from "@/context/authContext";
import { View, Text, Pressable } from "react-native";

export default function Home() {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  console.log("user data: ", user);

  return (
    <View className="flex-1 bg-white">
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
