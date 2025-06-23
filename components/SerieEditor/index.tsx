import React from "react";
import { Pressable, Text, View } from "react-native";

import { listOfSeries, SeriesNames } from "@/constants/Data";

import { styles } from "./styles";

export default function SerieEditor({ setSerie }: { setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>> }) {

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
