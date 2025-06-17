import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { styles } from './styles';

type ExerciseItem = {
  key: string;
  name: string;
};

const ExerciseList: ExerciseItem[] = [
  { key: "1", name: "Exercicio 1" },
  { key: "2", name: "Exercicio 2" },
  { key: "3", name: "Exercicio 3" },
];

export default function Exercises() {
  function Exercise({ key, name }: ExerciseItem) {
    return (
      <View style={[styles.page, styles.container]} key={key}>
        <Text>{name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        {ExerciseList.map((item) => (
          <Exercise key={item.key} name={item.name} />
        ))}
      </PagerView>
    </View>
  );
}
