import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "100%",
    backgroundColor: 'white',
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 50,
    zIndex: 1
  },
  saveButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  page: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 150,
    backgroundColor: "lightgray"
  }
});