import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { styles } from './styles';

export default function Exercises() {
    function Exercise({ key, name }: { key: string, name: string }) {
        return (
            <View style={[styles.page, styles.container]} key={key}>
                <Text>{name} </Text>
            </View>
        );
    }

    const ExerciseList = [
        { key: "1", name: "Exercicio 1" },
        { key: "2", name: "Exercicio 2" },
        { key: "3", name: "Exercicio 3" },
    ];

    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                {ExerciseList.map((item) => <Exercise key={item.key} name={item.name} />)}
            </PagerView>
        </View>
    );
}
