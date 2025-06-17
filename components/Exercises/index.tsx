import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { styles } from './styles';

type ExerciseItem = {
    key: string;
    name: string;
    series: number;
    repetitions: number;
    weight: number;
};

const ExerciseList: ExerciseItem[] = [
    {
        key: "1",
        name: "Exercicio 1",
        series: 3,
        repetitions: 8,
        weight: 20
    },
    {
        key: "2",
        name: "Exercicio 2",
        series: 3,
        repetitions: 8,
        weight: 20
    }, {
        key: "3",
        name: "Exercicio 3",
        series: 3,
        repetitions: 8,
        weight: 20
    },
];

export default function Exercises() {
    function Exercise({
        key,
        name,
        series,
        repetitions,
        weight
    }: ExerciseItem) {
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
