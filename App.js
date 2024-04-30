import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { isClip } from "react-native-app-clip";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    setInterval(() => {
      const index = Math.floor(Math.random() * 100) % 200;
      console.log("index", index);
      fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then((response) => response.json())
        .then((json) => setData(JSON.stringify(json)));
    }, 3000);

    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{data}</Text>
      <Text>isClip: {`${isClip()}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
