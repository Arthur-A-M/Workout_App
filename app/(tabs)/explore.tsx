import Exercises from "@/components/Exercises";
import Timer from "@/components/Timer";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Exercises />
      <Timer />
    </View>
  );
}

