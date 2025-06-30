import { Text, View } from 'react-native';

import { styles } from './styles';

export default function ExerciseEditor({ serie }: { serie: string }) {
    return (
        <View style={styles.container}>
            <Text>Série {serie}</Text>
        </View>
    );
}