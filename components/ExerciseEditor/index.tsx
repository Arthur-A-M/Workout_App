import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, SeriesNames, listOfSeriesType } from '@/constants/Data';
import { styles } from './styles';

export default function ExerciseEditor({serie = 'A', setSerie, listOfSeries}: {serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>>, listOfSeries: listOfSeriesType}) {

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const [seriesList, setSeriesList]: [ExerciseItem[], React.Dispatch<React.SetStateAction<ExerciseItem[]>>] = useState<ExerciseItem[]>(ReturnSerie(serie));

    function Exercise({ index }: { index: number }) {
        return (
            <View style={styles.page}>
                <View style={styles.box}>
                    <Text>{seriesList[index].name}</Text>
                    <View style={styles.boxRow}>
                        <Text>Séries</Text>
                        <Text>{seriesList[index].series}</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Repetições</Text>
                        <Text>{seriesList[index].repetitions}</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text>Carga</Text>
                        <Text>{seriesList[index].weight}</Text>
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
                   <Pressable onPress={() => console.log('Adicionar')} style={styles.box}><Text>Adicionar</Text></Pressable> 
                </View>
            </PagerView>
        </View>
    );
}
