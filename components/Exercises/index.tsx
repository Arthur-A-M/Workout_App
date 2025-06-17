import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, ExerciseList } from './data';
import { styles } from './styles';

export default function Exercises() {
    function Exercise({
        key,
        name,
        series,
        repetitions,
        weight
    }: ExerciseItem) {
        const [done, setDone] = useState(false);

        return (
            <View style={styles.page} key={key}>
                <View style={styles.box}>
                    <Text>{name}</Text>
                    <View style={styles.boxRow}>
                        <Text>Séries</Text>
                        <Text>{series}</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Repetições</Text>
                        <Text>{repetitions}</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Carga</Text>
                        <Text>{weight}</Text>
                    </View>
                    <Pressable style={styles.boxRow} onPress={() => setDone(!done)}>
                        <Text>Feito?</Text>
                        <Text>{done ? 'Sim' : 'Nao'}</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                {ExerciseList.map((item) => (
                    <Exercise
                        key={item.key}
                        name={item.name}
                        series={item.series}
                        repetitions={item.repetitions}
                        weight={item.weight}
                    />
                ))}
            </PagerView>
        </View>
    );
}
