import AsyncStorage from '@react-native-async-storage/async-storage';

import { listOfSeriesType } from '@/constants/Data';

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('userdata');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

export const storeData = async (series: listOfSeriesType) => {
    try {
        const jsonValue = JSON.stringify(series);
        await AsyncStorage.setItem('userdata', jsonValue);
    } catch (e) {
        // saving error
    }
};