import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native"; // SafeAreaView makes sure that text stays within the screen

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills and takes up the entire screen
    backgroundColor: "#fff", // fills the entire space
    alignItems: "center",
    justifyContent: "center"
  }
});
