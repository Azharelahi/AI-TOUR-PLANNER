import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Colors } from "./../../../constants/Colors";
import { auth } from "../../../configs/FirebaseConfig";
export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullName] = useState();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullname) {
      ToastAndroid.show("please Enter All Details",ToastAndroid.CENTER);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        //Navigation to  Home Screen from here <HomeScreen/>
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
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
          marginTop: 40,
        }}
      >
        Create New Account!
      </Text>

      <View style={{ marginTop: 60 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
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
        onPress={onCreateAccount}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 20, alignSelf: "center" }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign_in")}
        style={{
          alignSelf: "center",
          backgroundColor: Colors.WHITE,
          width: "80%",
          padding: 12,
          margin: 15,
          marginTop: 15,
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: Colors.PARTIAL_GREY,
        }}
      >
        <Text
          style={{ color: Colors.PRIMARY, fontSize: 20, alignSelf: "center" }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.GREY,
  },
});
