import { Text, TextInput, View } from 'react-native';

import { ExerciseItem } from '@/constants/Data';
import { styles } from './styles';

export default function Exercise({ index, seriesList, setSeriesList }: { index: number, seriesList: ExerciseItem[], setSeriesList: React.Dispatch<React.SetStateAction<ExerciseItem[]>> }) {
    function handleChange(name: keyof ExerciseItem, text: string) {
        setSeriesList(seriesList.map((item, i) => i === index ? { ...item, [name]: text } : item));
    }

    function handleDelete() {
        setSeriesList(seriesList.filter((_, i) => i !== index));
    }

    return (
        <View style={styles.page}>
            <View style={styles.box}>
                <TextInput
                    value={seriesList[index].name}
                    onChangeText={(text) => handleChange('name', text)}
                />
                <View style={styles.boxRow}>
                    <Text>Séries</Text>
                    <TextInput
                        value={seriesList[index].series}
                        onChangeText={(text) => handleChange('series', text)}
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.boxRow}>
                    <Text>Repetições</Text>
                    <TextInput
                        value={seriesList[index].repetitions}
                        onChangeText={(text) => handleChange('repetitions', text)}
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.boxRow}>
                    <Text>Carga</Text>
                    <TextInput
                        value={seriesList[index].weight}
                        onChangeText={(text) => handleChange('weight', text)}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
            <View>
                <Text onPress={handleDelete}>Deletar</Text>
            </View>
        </View>
    );
}
