import { ExerciseItem, listOfSeriesType, SeriesNames } from "@/constants/Data";
import { ReactElement } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

export default function EditSeries({ listOfSeries, setState }: { listOfSeries: listOfSeriesType, setState: React.Dispatch<React.SetStateAction<listOfSeriesType | null>> }): ReactElement {

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
        setState([...listOfSeries, newSerie]);
    }

    function SerieButton({ serieName }: { serieName: SeriesNames }) {
        return (
            <Pressable onPress={() => console.log(serieName)}><Text>{serieName}</Text></Pressable>
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
