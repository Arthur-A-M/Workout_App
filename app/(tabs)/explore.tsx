import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import ExercisesEditor from "@/components/ExercisesEditor";
import SerieEditor from "@/components/SerieEditor";
import type { ExerciseItem, SeriesNames } from "@/constants/Data";
import { listOfSeries } from "@/constants/Data";

export default function TabTwoScreen() {
  const [listOfSeriesHook, setListOfSeriesHook] = useState<{ name: SeriesNames, list: ExerciseItem[] }[]>([]);
  const [serie, setSerie]: [SeriesNames | null, React.Dispatch<React.SetStateAction<SeriesNames | null>>] = useState<SeriesNames | null>(null);
  const storeData = async (value: { name: SeriesNames, list: ExerciseItem[] }[] | null) => {
    if (value === null) {
      console.error("storeData: value is null");
      return;
    }

    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userdata', jsonValue);
    } catch (error) {
      console.error("storeData:", error);
    }
  };

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  async function checkForSeries() {
    const data = await getData('userdata');
    console.log(data);
    if (data === null) {
      storeData(listOfSeries);
    } else {
      return setListOfSeriesHook(data);
    }
  }

  useEffect(() => {
    checkForSeries();
  }, []);

  useEffect(() => {
    console.log('listOfSeriesHook', listOfSeriesHook);
    console.log('serie', serie);
  }, [listOfSeriesHook, serie]);

  function SaveSerie() {
    console.log('Save atempeted');
  }

  if (listOfSeriesHook.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else if (serie === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
        <SerieEditor setSerie={setSerie} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ExercisesEditor serie={serie} setSerie={setSerie} />
      </View>
    );
  }
}

