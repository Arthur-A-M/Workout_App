import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, listOfSeries, SeriesNames } from '@/constants/Data';
import { styles } from './styles';

export default function ExercisesEditor({ serie = 'A', setSerie }: { serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>> }) {
    const [listOfSeriesHook, setListOfSeriesHook] = useState<{ name: SeriesNames, list: ExerciseItem[] }[]>(listOfSeries);

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeriesHook.find(s => s.name === serie)?.list || listOfSeriesHook[0].list;
    }

    const seriesList: ExerciseItem[] = ReturnSerie(serie);

    const [seriesListHook, setSeriesListHook] = useState<ExerciseItem[]>(seriesList);

    function SaveSerie() {
        const newListOfSeriesHook: { name: SeriesNames, list: ExerciseItem[] }[] = listOfSeriesHook.map(item => {
            if (item.name === serie) {
                return {
                    name: serie,
                    list: seriesListHook
                };
            }
            return item;
        });
        setListOfSeriesHook(newListOfSeriesHook);
        console.log('Save atempeted');
    }

    function SaveExercise({
        key,
        name,
        series,
        repetitions,
        weight
    }: ExerciseItem) {
        const newSeriesListHook = seriesListHook.map(item => {
            if (item.name === name) {
                return {
                    key,
                    name,
                    series,
                    repetitions,
                    weight
                };
            }
            return item;
        });
        setSeriesListHook(newSeriesListHook);
    }
    /*
    useEffect(() => {
        const storeData = async (value: { name: SeriesNames, list: ExerciseItem[] }[] | null) => {
            if (value === null) {
                console.error("storeData: value is null");
                return;
            }

            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem('userdata', jsonValue);
            } catch (error) {
                console.error("storeData:", error);
            }
        };

        storeData(listOfSeriesHook);
    }, [listOfSeriesHook]);
    */

    function Exercise({
        key,
        name,
        series,
        repetitions,
        weight
    }: ExerciseItem) {
        const [exercise, setSeries]: [ExerciseItem, React.Dispatch<React.SetStateAction<ExerciseItem>>] = useState({
            key,
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
                <View>
                    <Pressable style={styles.boxRow} onPress={() => SaveExercise(exercise)}>
                        <Text>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => setSerie(null)}><Text>⬅️</Text></Pressable>
            <PagerView style={styles.container} initialPage={0}>
                {seriesListHook.map((item) => (
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
