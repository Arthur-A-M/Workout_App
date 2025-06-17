import Exercises from "@/components/Exercises";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Exercises />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Text>Timer</Text>
      </View>
    </View>
  );
}

