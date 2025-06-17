import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Timer() {
  const [running, setRunning] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Pressable
        style={{ backgroundColor: running ? "gray" : "lightgray" }}
        onPress={() => setRunning(!running)}
      >
        <Text>Timer</Text>
      </Pressable>
    </View>
  );
}
