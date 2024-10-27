import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { Stack } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "expo-image";

interface User {
  profileUrl?: string;
  username?: string;
}

interface ChatRoomHeaderProps {
  user: User;
  router: {
    back: () => void;
  };
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({ user, router }) => {
  console.log("ChatRoomHeader user:", user); // Add this line to log the user object

  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={() => router.back()}>
              <Octicons name="chevron-left" size={hp(4)} color="#737373" />
            </TouchableOpacity>
            <View className="flex-row items-center gap-3">
              <Image
                source={{ uri: user?.profileUrl }}
                style={
                  {
                    height: hp(4.5),
                    width: hp(4.5),
                    borderRadius: hp(4.5) / 2,
                  } as StyleProp<ImageStyle>
                }
              />
              <Text
                style={{ fontSize: hp(2.5) } as StyleProp<TextStyle>}
                className="font-medium text-neutral-700"
              >
                {user?.username}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View className="flex-row items-center gap-8">
            <Ionicons name="call" size={hp(2.8)} color={"#737373"} />
            <Ionicons name="videocam" size={hp(2.8)} color={"#737373"} />
          </View>
        ),
      }}
    />
  );
};

export default ChatRoomHeader;