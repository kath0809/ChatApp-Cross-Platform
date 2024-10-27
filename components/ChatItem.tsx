import { blurhash } from "@/utils/common";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

interface ChatItemProps {
  item: {
    profileUrl: string;
    username: string;
    [key: string]: any;
  };
  noBorder: boolean;
  router: ReturnType<typeof useRouter>;
  index: number;
}

const ChatItem: React.FC<ChatItemProps> = ({
  item,
  noBorder,
  router,
  index,
}) => {
  const openChatRoom = () => {
    //router.push({ pathname: "/chatRoom", state: { item } });
  };

  return (
    <TouchableOpacity
      onPress={openChatRoom}
      className={`flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 ${
        noBorder ? "" : "border-b border-b-neutral-200"
      }`}
    >
      <Image
        style={{ height: hp(6), width: hp(6), borderRadius: hp(6) }}
        source={item?.profileUrl}
        placeholder={blurhash}
        transition={500}
      />

      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {item?.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500"
          >
            10:30
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="text-neutral-500 font-medium"
        >
          Last message
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
