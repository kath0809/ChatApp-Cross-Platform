import React from "react";
import { View, Text, FlatList } from "react-native";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";

interface User {
  userId: string;
  profileUrl: string;
  username: string;
  [key: string]: any;
}

interface ChatlistProps {
  users: User[];
}

const Chatlist: React.FC<ChatlistProps> = ({ users }) => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            noBorder={index + 1 === users.length}
            router={router}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default Chatlist;
