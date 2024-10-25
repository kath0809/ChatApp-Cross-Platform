import { useAuth } from "@/context/authContext";
import { View, Text, Button, Pressable } from "react-native";

export default function Home() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
