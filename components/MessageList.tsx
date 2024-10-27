import React from "react";
import { View, Text } from "react-native";

interface Message {
  id: string;
  text: string;
  // Add other message properties here
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <View>
      {messages.map((message) => (
        <Text key={message.id}>{message.text}</Text>
      ))}
    </View>
  );
};

export default MessageList;
