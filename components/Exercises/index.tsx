import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Exercises() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>Exercise 1</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Exercise 2</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});