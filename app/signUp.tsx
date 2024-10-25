import CustomKeyboardView from "@/components/CustomKeyboradView";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/authContext";
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


export default function SignUp() {
  const router = useRouter();
const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please fill in all fields");
      return;
    }
    setLoading(true);

    let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);

    setLoading(false);

    console.log("Got result: ", response);
    if(!response.success){
      Alert.alert("Sign Up", response.message);
      
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* Sign in image */}
        <View className="items-center">
          <Image
            style={{ height: hp(20) }}
            source={require("../assets/images/signUp.png")}
          />

          <View className="gap-10">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wider text-center text-neutral-800"
            >
              Sign Up
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

              <View
                style={{ height: hp(6), width: wp(90) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="person" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2.2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Username"
                  placeholderTextColor={"gray"}
                />
              </View>
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
              <View
                style={{ height: hp(6), width: wp(90) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="image" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (profileRef.current = value)}
                  style={{ fontSize: hp(2.2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Profile picture"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* Submit button */}

              <View>
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={{ height: hp(6.5) }}
                    className="bg-teal-500 rounded-xl justify-center items-center"
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="text-white font-bold tracking-wider"
                    >
                      {" "}
                      Sign Up
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
                  Already have an account?
                </Text>
                <Pressable onPress={() => router.push("/signIn")}>
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="text-teal-500 font-bold"
                  >
                    {" "}
                    Sign in
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
}
