import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, listOfSeries, SeriesNames } from '@/constants/Data';
import { styles } from './styles';

export default function ExercisesEditor({ serie = 'A', setSerie }: { serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>> }) {
    const [listOfSeriesHook, setListOfSeriesHook] = useState<{ name: SeriesNames, list: ExerciseItem[] }[]>([]);

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const seriesList: ExerciseItem[] = ReturnSerie(serie);

    function SaveSerie() {
        console.log('Save atempeted');
    }

    function Exercise({
        key,
        name,
        series,
        repetitions,
        weight
    }: ExerciseItem) {
        const [exercise, setSeries] = useState({
            name,
            series,
            repetitions,
            weight
        });
        return (
            <View style={styles.page} key={key}>
                <View style={styles.box}>
                    <Text>{name}</Text>
                    <View style={styles.boxRow}>
                        <Text>Séries</Text>
                        <TextInput
                            style={styles.input}
                            value={exercise.series}
                            keyboardType='numeric'
                            onChangeText={(text) => setSeries({ ...exercise, series: text })}
                        />
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Repetições</Text>
                        <TextInput
                            style={styles.input}
                            value={exercise.repetitions}
                            keyboardType='numeric'
                            onChangeText={(text) => setSeries({ ...exercise, repetitions: text })}
                        />
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Carga</Text>
                        <TextInput
                            style={styles.input}
                            value={exercise.weight}
                            keyboardType='numeric'
                            onChangeText={(text) => setSeries({ ...exercise, weight: text })}
                        />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => setSerie(null)}><Text>⬅️</Text></Pressable>
            <PagerView style={styles.container} initialPage={0}>
                {seriesList.map((item) => (
                    <Exercise
                        key={item.key}
                        name={item.name}
                        series={item.series}
                        repetitions={item.repetitions}
                        weight={item.weight}
                    />
                ))}
            </PagerView>
            <View style={{ height: "20%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                <Pressable onPress={SaveSerie}>
                    <Text>Salvar</Text>
                </Pressable>
            </View>
        </View>
    );
}
