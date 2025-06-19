import Exercises from "@/components/Exercises";
import SerieSeletor from "@/components/SerieSeletor";
import Timer from "@/components/Timer";
import { SeriesNames } from "@/constants/Data";
import { useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {

  const [serie, setSerie]: [SeriesNames | null, React.Dispatch<React.SetStateAction<SeriesNames | null>>] = useState<SeriesNames | null>(null);

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

