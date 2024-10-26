import { View, Text,Pressable } from "react-native";

export default function HomeHeader() {
    return (
        <View className="flex-1 bg-white">
        <Text>Home</Text>
        <Pressable>
            <Text>Logout</Text>
        </Pressable>
        </View>
    );
    }