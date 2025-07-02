import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, SeriesNames, listOfSeriesType } from '@/constants/Data';
import { styles } from './styles';

export default function ExerciseEditor({serie = 'A', setSerie, listOfSeries}: {serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>>, listOfSeries: listOfSeriesType}) {

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const [seriesList, setSeriesList]: [ExerciseItem[], React.Dispatch<React.SetStateAction<ExerciseItem[]>>] = useState<ExerciseItem[]>(ReturnSerie(serie));

    function addExercise() {
        setSeriesList([...seriesList, { key: '', name: '', series: '', repetitions: '', weight: '' }])
    }

    function Exercise({ index }: { index: number }) {
        const [series, setSeries] = useState<number>(Number(seriesList[index].series));
        const [repetitions, setRepetitions] = useState<number>(Number(seriesList[index].repetitions));
        const [weight, setWeight] = useState<number>(Number(seriesList[index].weight));

        function handleChange(name: keyof ExerciseItem, text: string) {
            setSeriesList(seriesList.map((item, i) => i === index ? { ...item, [name]: text } : item))
        }

        function handleSeriesIncrement() {
            setSeries(series + 1);
            handleChange('series', (series + 1).toString());
        }

        function handleSeriesDecrement() {
            setSeries(series - 1);
            handleChange('series', (series - 1).toString());
        }

        function handleRepetitionsIncrement() {
            setRepetitions(repetitions + 1);
            handleChange('repetitions', (repetitions + 1).toString());
        }

        function handleRepetitionsDecrement() {
            setRepetitions(repetitions - 1);
            handleChange('repetitions', (repetitions - 1).toString());
        }

        function handleWeightIncrement() {
            setWeight(weight + 0.5);
            handleChange('weight', (weight + 0.5).toString());
        }

        function handleWeightDecrement() {
            setWeight(weight - 0.5);
            handleChange('weight', (weight - 0.5).toString());
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
                        <Pressable onPress={handleSeriesDecrement}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{series}</Text>
                        <Pressable onPress={handleSeriesIncrement}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Repetições</Text>
                        <Pressable onPress={handleRepetitionsDecrement}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{repetitions}</Text>
                        <Pressable onPress={handleRepetitionsIncrement}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Carga</Text>
                        <Pressable onPress={handleWeightDecrement}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{weight.toFixed(1)}</Text>
                        <Pressable onPress={handleWeightIncrement}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => setSerie(null)}><Text>⬅️</Text></Pressable>
            <PagerView style={styles.container} initialPage={0}>
                {seriesList.map((item, index) => (
                    <Exercise
                        key={`${index}`}
                        index={index}
                    />
                ))}
                <View style={styles.page}>
                   <Pressable onPress={() => addExercise()} style={styles.box}><Text>Adicionar</Text></Pressable> 
                </View>
            </PagerView>
        </View>
    );
}
