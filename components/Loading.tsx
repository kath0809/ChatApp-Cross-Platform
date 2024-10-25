import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  const size = 130; // Define the size variable

  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../assets/Animation1.json")} autoPlay loop

      />
    </View>
  );
}
