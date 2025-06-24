import { ActivityIndicator, View } from "react-native";

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}