import React from "react";
import { Pressable, Text, View } from "react-native";

import { listOfSeries } from "@/constants/Data";

import { styles } from "./styles";

export default function SerieSeletor({ setSerie }: { setSerie: React.Dispatch<React.SetStateAction<'A' | 'B' | 'C' | 'D' | 'E' | 'F'| 'G'| null>> }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setSerie(listOfSeries[0].name)} style={{ marginBottom: 10 }}>
                <Text>Série {listOfSeries[0].name}</Text>
            </Pressable>
            <Pressable onPress={() => setSerie(listOfSeries[1].name)}>
                <Text>Série {listOfSeries[1].name}</Text>
            </Pressable>
        </View>
    );
}