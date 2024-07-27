import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
import { Ionicons } from "@expo/vector-icons";
export default function SingIn() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const onSignIn = () => {
    if (!password && !email) {
      ToastAndroid.show("please Enter Email and Password", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid email or password!", ToastAndroid.LONG);
        } else if (errorCode == "auth/invalid-email") {
          ToastAndroid.show("Not a valid email", ToastAndroid.BOTTOM);
        }
      });
  };
  return (
    <View style={{ padding: 15, marginTop: 40 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
          alignSelf: "center",
          marginTop: 100,
        }}
      >
        Let's Sign you in!
      </Text>

      <View style={{ marginTop: 60 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: Colors.PRIMARY,
          width: "80%",
          padding: 12,
          margin: 15,
          marginTop: 40,
          borderRadius: 20,
        }}
        onPress={onSignIn}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 20, alignSelf: "center" }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign_up")}
        style={{
          alignSelf: "center",
          backgroundColor: Colors.WHITE,
          width: "80%",
          padding: 12,
          margin: 15,
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: Colors.PARTIAL_GREY,
        }}
      >
        <Text
          style={{ color: Colors.PRIMARY, fontSize: 20, alignSelf: "center" }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
// const styles = StyleSheet.create({

// })
const styles = StyleSheet.create({
  input: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.GREY,
  },
});
