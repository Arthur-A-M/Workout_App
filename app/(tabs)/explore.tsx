import { Pressable, Text, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ExerciseItem, SeriesNames } from "@/constants/Data";
import { listOfSeries } from "@/constants/Data";

export default function TabTwoScreen() {
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
      return;
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
      <Pressable onPress={checkForSeries}>
        <Text>Check for series</Text>
      </Pressable>
    </View>
  );
}

