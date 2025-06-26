import { listOfSeriesType } from "@/constants/Data";
import { ReactElement } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

export default function EditSeries({ listOfSeries }: { listOfSeries: listOfSeriesType }): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Editar Série</Text>
            {listOfSeries.map(serie => <Text key={serie.name}>{serie.name}</Text>)}
            <Pressable
                onPress={() => console.log('Adicionar')}
            ><Text>Adicionar</Text></Pressable>
        </View>
    );
}
