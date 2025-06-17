export type ExerciseItem = {
    key: string;
    name: string;
    series: number;
    repetitions: number;
    weight: number;
};

export const ExerciseList: ExerciseItem[] = [
    {
        key: "1",
        name: "Exercicio 1",
        series: 3,
        repetitions: 8,
        weight: 20
    },
    {
        key: "2",
        name: "Exercicio 2",
        series: 3,
        repetitions: 8,
        weight: 20
    }, {
        key: "3",
        name: "Exercicio 3",
        series: 3,
        repetitions: 8,
        weight: 20
    },
];