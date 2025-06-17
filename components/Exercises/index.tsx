import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { styles } from './styles';

export default function Exercises() {
    function Exercise({key, name}: {key: string, name: string}) {
        return (
            <View style={[styles.page, styles.container]} key={key}>
                <Text>{name} </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                <Exercise key="1" name="Exercicio 1" />
                <Exercise key="2" name="Exercicio 2" />
                <Exercise key="3" name="Exercicio 3" />
            </PagerView>
        </View>
    );
}
