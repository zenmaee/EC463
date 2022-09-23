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
      <Text>Welcome to Our Twitter API App!</Text>
      <TextInput style={styles.UserInput}></TextInput>
      <View style={styles.searchButton}>
        <Button title="Generate Results" color="#000000"></Button>
      </View>
      <Text style={styles.resultDisplay}>Display Search Results</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    width: "50%",
    height: 40,
    backgroundColor: "#3EA6FF"
  },
  UserInput: {
    height: 40,
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 1,
    margin: 5
  },
  resultDisplay: {
    margin: 20,
    backgroundColor: "#FFFFFF"
  }
});

export default WelcomeScreen;
