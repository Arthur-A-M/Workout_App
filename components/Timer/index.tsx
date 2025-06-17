import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Timer() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
      return () => {
        clearInterval(intervalId);
        setTime(0);
      };
    }
  }, [running]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Pressable
        style={{ backgroundColor: running ? "gray" : "lightgray" }}
        onPress={() => setRunning(!running)}
      >
        <Text>Timer</Text>
        {running && <Text>{time} seconds</Text>}
      </Pressable>
    </View>
  );
}
