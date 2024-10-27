import Chatlist from "@/components/ChatList";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/authContext";
import { usersRef } from "@/firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface User {
  userId: string;
  profileUrl: string;
  username: string;
  [key: string]: any;
}

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (user?.uid) getUsers();
  }, [user?.uid]);

  const getUsers = async () => {
    const q = query(usersRef, where("userId", "!=", user?.uid));

    const querySnapshot = await getDocs(q);
    let data: User[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() } as User);
    });

    setUsers(data);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {users.length > 0 ? (
        <Chatlist users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="large" color="teal" />
        </View>
      )}
    </View>
  );
}
