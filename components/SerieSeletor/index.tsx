import React from "react";
import { Pressable, Text, View } from "react-native";

import { SeriesNames, listOfSeriesType } from "@/constants/Data";

import { styles } from "./styles";

export default function SerieSeletor({ setSerie,listOfSeries }: { setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>>, listOfSeries: listOfSeriesType }) {

    return (
        <View style={styles.container}>
            {listOfSeries.map((serie, index) => (
                <Pressable key={serie.name} onPress={() => setSerie(serie.name)} style={{ marginBottom: index !== listOfSeries.length - 1 ? 10 : 0 }}>
                    <Text>Série {serie.name}</Text>
                </Pressable>
            ))}
        </View>
    );
}
