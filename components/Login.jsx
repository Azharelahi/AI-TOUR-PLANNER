import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require(".//../assets/images/nlog.jpg")}
        style={{
          marginTop: 30,
          width: "110%",
          height: 380,

          alignSelf: "center",
        }}
      />
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: -20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GREY,
            marginTop: "4%",
          }}
        >
          "Plane your next adventure effortlessly.Personalized intineraties at
          your fingertips.Travel smarter with AI-driven insights "
        </Text>
        <TouchableOpacity
          onPress={() => router.push("auth/sign_in")}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            marginTop: "15%",
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
