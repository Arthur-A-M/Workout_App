import Exercises from "@/components/Exercises";
import Timer from "@/components/Timer";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {

  const [serie, setSerie] = useState<'A' | 'B' | null>(null);

  function chooseSerie(newSerie: 'A' | 'B') {
    if (newSerie === serie) {
      return;
    }
    setSerie(newSerie);
  }

  if (serie === null) {
    return (
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Pressable onPress={() => chooseSerie('A')} style={{ marginBottom: 10 }}>
          <Text>Exercícios A</Text>
        </Pressable>
        <Pressable onPress={() => chooseSerie('B')}>
          <Text>Exercícios B</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Exercises serie={serie} />
        <Timer />
      </View>
    );
  }
}

