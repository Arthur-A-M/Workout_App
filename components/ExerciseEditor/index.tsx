import { Text, View } from 'react-native';

export default function ExerciseEditor({ serie }: { serie: string }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
            <Text>Série {serie}</Text>
        </View>
    );
}