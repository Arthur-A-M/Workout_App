import { listOfSeriesType } from "@/constants/Data";
import { ReactElement } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function EditSeries({listOfSeries}: {listOfSeries: listOfSeriesType}): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Editar Série</Text>
            {listOfSeries.map(serie => <Text key={serie.name}>{serie.name}</Text>)}
        </View>
    );
}
