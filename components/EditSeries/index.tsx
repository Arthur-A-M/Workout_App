import { ReactElement } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function EditSeries(): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Editar Série</Text>
        </View>
    );
}