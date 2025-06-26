import Loading from "@/components/Loading";
import { listOfSeriesType, SeriesNames } from "@/constants/Data";
import { LoadData } from "@/Functions";
import { ReactElement, useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TabTwoScreen(): ReactElement {
  const [listOfSeries, setListOfSeries]: [listOfSeriesType | null, React.Dispatch<React.SetStateAction<listOfSeriesType | null>>] = useState<listOfSeriesType | null>(null);
  const [serie, setSerie]: [SeriesNames | null, React.Dispatch<React.SetStateAction<SeriesNames | null>>] = useState<SeriesNames | null>(null);

  useEffect(() => {
    LoadData(setListOfSeries);
    console.log(listOfSeries);
  }, []);

  if (listOfSeries === null) {
    return (
      <Loading />
    );
  }
  else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
        <Text>Explore</Text>
      </View>
    );
  }
}

