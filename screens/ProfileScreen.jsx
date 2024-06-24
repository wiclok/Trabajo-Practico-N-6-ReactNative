import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native-web";

export const ProfileScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      <Text>Profile Screen</Text>
      <Text>Count: {count}</Text>
      <View style={style.button}>
        <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
  },
});
