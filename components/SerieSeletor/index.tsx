import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

export default function SerieSeletor({ setSerie }: { setSerie: React.Dispatch<React.SetStateAction<'A' | 'B' | null>> }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setSerie('A')} style={{ marginBottom: 10 }}>
                <Text>Exercícios A</Text>
            </Pressable>
            <Pressable onPress={() => setSerie('B')}>
                <Text>Exercícios B</Text>
            </Pressable>
        </View>
    );
}