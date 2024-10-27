import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, TextInput, TouchableOpacity } from "react-native";
import ChatRoomHeader from "@/components/ChatRoomHeader";
import React, { useState } from "react";
import MessageList from "@/components/MessageList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, Ionicons } from "@expo/vector-icons";
import CustomKeyboardView from "@/components/CustomKeyboradView";

interface Message {
  id: string;
  text: string;
  // Add other message properties here
}

interface User {
  profileUrl?: string;
  username?: string;
  userId?: string;
}

export default function ChatRoom() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);

  // Parse the user object from the params
  const user: User = params.item ? JSON.parse(params.item as string) : {};

  console.log("Parsed user: ", user);

  return (
    <CustomKeyboardView inChat={true}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <ChatRoomHeader user={user} router={router} />
        <View className="h-3 border-b border-neutral-300" />
        <View className="flex-1 justify-between bg-neutral-100 overflow-visible" />
        <View className="flex-1">
          <MessageList messages={messages} />
        </View>
        <View style={{ marginBottom: hp(2.7) }} className="pt-2">
          <View className="flex-row mx-3 justify-between bg-white border border-neutral-300 p-2 rounded-full pl-5">
            <TextInput
              placeholder="Type a message"
              style={{ fontSize: hp(2) }}
              className="flex-1 mr-2"
            />
            <TouchableOpacity className="bg-neutral-200 p-2 mr-[1px] rounded-full">
              <Feather name="send" size={hp(2.7)} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}