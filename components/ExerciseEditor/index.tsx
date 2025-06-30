import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { ExerciseItem, SeriesNames, listOfSeriesType } from '@/constants/Data';

import { styles } from './styles';

export default function ExerciseEditor({ serie, listOfSeries }: { serie: SeriesNames, listOfSeries: listOfSeriesType }) {
    function ReturnSerie(serie: SeriesNames): ExerciseItem[] {
        return listOfSeries.find(s => s.name === serie)?.list || listOfSeries[0].list;
    }

    const [seriesList, setSeriesList]: [ExerciseItem[], React.Dispatch<React.SetStateAction<ExerciseItem[]>>] = useState<ExerciseItem[]>(ReturnSerie(serie) );

    useEffect(() => {
        console.log('seriesList', seriesList);
    }, [serie]);
    
    return (
        <View style={styles.container}>
            <Text>Série {serie}</Text>
        </View>
    );
}