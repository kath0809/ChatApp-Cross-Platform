import Loading from "@/components/Loading";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInputComponent,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SignIn() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // Login process
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* Sign in image */}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            source={require("../assets/images/login.png")}
          />

          <View className="gap-10">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wider text-center text-neutral-800"
            >
              Sign In
            </Text>
            {/* Inputs */}
            <View className="gap-4">
              <View
                style={{ height: hp(6), width: wp(90) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="mail" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (emailRef.current = value)}
                  style={{ fontSize: hp(2.2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Email adress"
                  placeholderTextColor={"gray"}
                />
              </View>

              <View className="gap-3">
                <View
                  style={{ height: hp(6), width: wp(90) }}
                  className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
                >
                  <Octicons name="lock" size={hp(2.7)} color="gray" />
                  <TextInput
                    onChangeText={(value) => (passwordRef.current = value)}
                    style={{ fontSize: hp(2.2) }}
                    className="flex-1 font-semibold text-neutral-700"
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={"gray"}
                  />
                </View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-right text-neutral-500"
                >
                  Forgot password?
                </Text>
              </View>

              {/* Submit button */}

              <View>
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={handleLogin}
                    style={{ height: hp(6.5) }}
                    className="bg-teal-500 rounded-xl justify-center items-center"
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="text-white font-bold tracking-wider"
                    >
                      {" "}
                      Sign In
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Sign up */}
              <View className="flex-row justify-center">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="text-neutral-500 font-semibold"
                >
                  Don't have an account?
                </Text>
                <Pressable onPress={() => router.push("/signUp")}>
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="text-teal-500 font-bold"
                  >
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
