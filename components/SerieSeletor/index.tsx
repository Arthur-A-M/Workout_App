import React from "react";
import { Pressable, Text, View } from "react-native";

import { listOfSeries } from "@/constants/Data";

import { styles } from "./styles";

export default function SerieSeletor({ setSerie }: { setSerie: React.Dispatch<React.SetStateAction<'A' | 'B' | 'C' | 'D' | 'E' | 'F'| 'G'| null>> }) {

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
