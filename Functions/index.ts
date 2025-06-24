import AsyncStorage from '@react-native-async-storage/async-storage';

import { listOfSeries, listOfSeriesType } from '@/constants/Data';

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

export function LoadData(setState: React.Dispatch<React.SetStateAction<listOfSeriesType | null>>) {
    getData().then(data => {
        if (data) {
            setState(data);
        } else {
            storeData(listOfSeries).then(() => {
                getData().then(data => {
                    setState(data);
                });
            })
        }
    });
}