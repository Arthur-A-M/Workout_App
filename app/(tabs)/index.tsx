import Exercises from "@/components/Exercises";
import SerieSeletor from "@/components/SerieSeletor";
import Timer from "@/components/Timer";
import { ExerciseItem, listOfSeries, SeriesNames } from '@/constants/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { View } from "react-native";

type listOfSeriesType = { name: SeriesNames; list: ExerciseItem[]; }[]

export default function HomeScreen() {
  const [listOfSeriesHook, setListOfSeriesHook]: [listOfSeriesType|null, React.Dispatch<React.SetStateAction<listOfSeriesType|null>>] = useState<listOfSeriesType|null>(null);
  const [serie, setSerie]: [SeriesNames | null, React.Dispatch<React.SetStateAction<SeriesNames | null>>] = useState<SeriesNames | null>(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userdata');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (
    series: listOfSeriesType
  ) => {
    try {
      const jsonValue = JSON.stringify(series);
      await AsyncStorage.setItem('userdata', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getData().then(data => {
      if (data) {
        setListOfSeriesHook(data);
      } else {
        storeData(listOfSeries).then(() => {
          getData().then(data => {
            setListOfSeriesHook(data);
          });
        })
      }
    });
  }, []);

  if (serie === null) {
    return (
      <SerieSeletor setSerie={setSerie} />
    );
  } else {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Exercises serie={serie} setSerie={setSerie} />
        <Timer />
      </View>
    );
  }
}

