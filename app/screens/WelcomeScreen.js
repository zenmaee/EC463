import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Text style={styles.WelcomeText}>Welcome to Our Twitter App!</Text>
      <TextInput style={styles.UserInput}></TextInput>
      <View style={styles.loginButton}>
        <Button title="Generate Results"></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    width: "50%",
    height: 40,
    backgroundColor: "#3EA6FF"
  },
  WelcomeText: {},
  UserInput: {
    height: 40,
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 1
  }
});

export default WelcomeScreen;
