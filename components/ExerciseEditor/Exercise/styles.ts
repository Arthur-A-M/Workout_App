import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});