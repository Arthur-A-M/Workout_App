export type ExerciseItem = {
    key: string;
    name: string;
    series: string;
    repetitions: string;
    weight: string;
};

export type SeriesNames = "A" | "B" | "C" | "D" | "E" | "F" | "G" | null;

export const ExerciseListA: ExerciseItem[] = [
    {
        key: "1",
        name: "Elevação sagital",
        series: '3',
        repetitions: '8',
        weight: '10'
    },
    {
        key: "2",
        name: "Voador",
        series: '3',
        repetitions: '8',
        weight: '55'
    },
    {
        key: "3",
        name: "Supino declinado maquina",
        series: '3',
        repetitions: '8',
        weight: '40'
    },
    {
        key: "4",
        name: "Supino maquina",
        series: '3',
        repetitions: '8',
        weight: '25'
    },
    {
        key: "5",
        name: "Triceps barra V",
        series: '3',
        repetitions: '8',
        weight: '50'
    },
    {
        key: "6",
        name: "Cadeira extensora",
        series: '3',
        repetitions: '11',
        weight: '6'
    },
    {
        key: "7",
        name: "Panturilha máquina",
        series: '3',
        repetitions: '10',
        weight: '20'
    },
];

export const ExerciseListB: ExerciseItem[] = [
    {
        key: "1",
        name: "Puxada barra aberta ",
        series: '3',
        repetitions: '8',
        weight: '55'
    },
    {
        key: "2",
        name: "Remada unilateral halter ",
        series: '3',
        repetitions: '8',
        weight: '26'
    },
    {
        key: "3",
        name: "Rosca concentrada",
        series: '3',
        repetitions: '8',
        weight: '12'
    },
    {
        key: "4",
        name: "Cadeira adutora",
        series: '3',
        repetitions: '8',
        weight: '49.6'
    },
    {
        key: "5",
        name: "Cadeira abdutora",
        series: '3',
        repetitions: '8',
        weight: '59'
    },
    {
        key: "6",
        name: "Stiff ",
        series: '3',
        repetitions: '11',
        weight: '5'
    },
    {
        key: "7",
        name: "Elevação pélvica com barra",
        series: '3',
        repetitions: '10',
        weight: '10'
    },
];

export const listOfSeries: { name: SeriesNames, list: ExerciseItem[]}[] = [
    {
        name: 'A',
        list: ExerciseListA
    },
    {
        name: 'B',
        list: ExerciseListB
    }
]