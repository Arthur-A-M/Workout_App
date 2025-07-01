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
        return (
            <View style={styles.page}>
                <View style={styles.box}>
                    <TextInput 
                        value={seriesList[index].name}
                        onChangeText={(text) => setSeriesList(seriesList.map((item, i) => i === index ? { ...item, name: text } : item))}
                    />
                    <View style={styles.boxRow}>
                        <Text>Séries</Text>
                        <TextInput 
                            value={seriesList[index].series}
                            onChangeText={(text) => setSeriesList(seriesList.map((item, i) => i === index ? { ...item, series: text } : item))}
                        />
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Repetições</Text>
                        <TextInput 
                            value={seriesList[index].repetitions}
                            onChangeText={(text) => setSeriesList(seriesList.map((item, i) => i === index ? { ...item, repetitions: text } : item))}
                        />
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Carga</Text>
                        <TextInput 
                            value={seriesList[index].weight}
                            onChangeText={(text) => setSeriesList(seriesList.map((item, i) => i === index ? { ...item, weight: text } : item))}
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
