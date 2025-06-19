import Exercises from "@/components/Exercises";
import SerieSeletor from "@/components/SerieSeletor";
import Timer from "@/components/Timer";
import { useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {

  const [serie, setSerie]: ['A' | 'B' | 'C' | 'D' | 'E' | 'F'| 'G'| null, React.Dispatch<React.SetStateAction<'A' | 'B' | 'C' | 'D' | 'E' | 'F'| 'G'| null>>] = useState<'A' | 'B' | 'C' | 'D' | 'E' | 'F'| 'G'| null>(null);

  if (serie === null) {
    return (
        <SerieSeletor setSerie={setSerie} />
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

