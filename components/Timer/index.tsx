import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Timer() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (running) {
            const intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
            return () => {
                clearInterval(intervalId);
                setTime(0);
            };
        }
    }, [running]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <Pressable
                style={{
                    height: 100,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: running ? "gray" : "lightgray"
                }}
                onPress={() => setRunning(!running)}
            >
                {running ? <Text>{formatTime(time)}</Text> : <Text>Descansar</Text>}
            </Pressable>
        </View>
    );
}
