import { ReactElement } from "react";
import { Text, View } from "react-native";

export default function EditSeries(): ReactElement {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
            <Text>Editar Série</Text>
        </View>
    );
}