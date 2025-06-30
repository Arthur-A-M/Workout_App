import { ExerciseItem, listOfSeriesType, SeriesNames } from "@/constants/Data";
import { ReactElement } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

export default function EditSeries({ 
    listOfSeries, 
    setSeriesList,
    setSeries
}: { 
    listOfSeries: listOfSeriesType, 
    setSeriesList: React.Dispatch<React.SetStateAction<listOfSeriesType | null>>,
    setSeries: React.Dispatch<React.SetStateAction<SeriesNames>>
}): ReactElement {

    function createSeriesItem(name: SeriesNames, list: ExerciseItem[] = [{ key: '', name: '', series: '', repetitions: '', weight: '' }]): {
        name: SeriesNames;
        list: ExerciseItem[];
    } {
        return { name, list };
    }

    const arrayOfSeries: SeriesNames[] = listOfSeries.map(serie => serie.name);

    const SeriesNames: SeriesNames[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    const newSerieName = SeriesNames[arrayOfSeries.length];
    const newSerie = createSeriesItem(newSerieName);

    const handleAddSerie = () => {
        setSeriesList([...listOfSeries, newSerie]);
    }

    function SerieButton({ serieName }: { serieName: SeriesNames }) {
        return (
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable onPress={() => setSeries(serieName)}><Text>{serieName}</Text></Pressable>
                <Pressable onPress={() => setSeriesList(listOfSeries.filter(serie => serie.name !== serieName))}><Text>Remover</Text></Pressable>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <Text>Editar Série</Text>
            {arrayOfSeries.map(serieName => <SerieButton key={serieName} serieName={serieName} />)}
            <Pressable
                onPress={handleAddSerie}
            ><Text>Adicionar</Text></Pressable>
        </View>
    );
}
