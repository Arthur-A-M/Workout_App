import { LoadData } from "@/Functions";
import Exercises from "@/components/Exercises";
import Loading from "@/components/Loading";
import SerieSeletor from "@/components/SerieSeletor";
import Timer from "@/components/Timer";
import { listOfSeriesType, SeriesNames } from '@/constants/Data';
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const [listOfSeries, setListOfSeries]: [listOfSeriesType | null, React.Dispatch<React.SetStateAction<listOfSeriesType | null>>] = useState<listOfSeriesType | null>(null);
  const [serie, setSerie]: [SeriesNames | null, React.Dispatch<React.SetStateAction<SeriesNames | null>>] = useState<SeriesNames | null>(null);

  useEffect(() => {
    LoadData(setListOfSeries);
  }, []);

  if (listOfSeries === null) {
    return (
      <Loading />
    );
  } else if (serie === null && listOfSeries !== null) {
    return (
      <SerieSeletor setSerie={setSerie} listOfSeries={listOfSeries} />
    );
  } else if (listOfSeries !== null) {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Exercises serie={serie} setSerie={setSerie} listOfSeries={listOfSeries} />
        <Timer />
      </View>
    );
  }
}