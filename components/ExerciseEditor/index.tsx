import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import Exercise from './Exercise';

import { ExerciseItem, SeriesNames, listOfSeriesType } from '@/constants/Data';
import { styles } from './styles';

export default function ExerciseEditor({ serie = 'A', setSerie, listOfSeries }: { serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>>, listOfSeries: listOfSeriesType }) {

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const [listOfSeriesHook, setListOfSeriesHook]: [listOfSeriesType, React.Dispatch<React.SetStateAction<listOfSeriesType>>] = useState<listOfSeriesType>(listOfSeries);
    const [seriesList, setSeriesList]: [ExerciseItem[], React.Dispatch<React.SetStateAction<ExerciseItem[]>>] = useState<ExerciseItem[]>(ReturnSerie(serie));

    function addExercise() {
        setSeriesList([...seriesList, { key: '', name: '', series: '', repetitions: '', weight: '' }])
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => setSerie(null)}><Text>⬅️</Text></Pressable>
            <PagerView style={styles.container} initialPage={0}>
                {seriesList.map((item, index) => (
                    <Exercise
                        key={`${index}`}
                        index={index}
                        seriesList={seriesList}
                        setSeriesList={setSeriesList}
                    />
                ))}
                <View style={styles.page}>
                    <Pressable onPress={() => addExercise()} style={styles.box}><Text>Adicionar</Text></Pressable>
                </View>
            </PagerView>
            <Pressable style={styles.saveButton} onPress={() => console.log('salvar')}><Text>Salvar</Text></Pressable>
        </View>
    );
}
