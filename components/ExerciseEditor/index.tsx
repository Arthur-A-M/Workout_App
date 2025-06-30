import { Pressable, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { ExerciseItem, SeriesNames, listOfSeriesType } from '@/constants/Data';
import { styles } from './styles';

export default function ExerciseEditor({serie = 'A', setSerie, listOfSeries}: {serie: SeriesNames | null | undefined, setSerie: React.Dispatch<React.SetStateAction<SeriesNames | null>>, listOfSeries: listOfSeriesType}) {

    function ReturnSerie(serie: SeriesNames | null): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const seriesList: ExerciseItem[] = ReturnSerie(serie);

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
                <View style={styles.page}>
                   <Pressable onPress={() => console.log('Adicionar')} style={styles.box}><Text>Adicionar</Text></Pressable> 
                </View>
            </PagerView>
        </View>
    );
}
