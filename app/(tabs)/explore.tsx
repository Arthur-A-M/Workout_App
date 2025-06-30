import EditSeries from "@/components/EditSeries";
import Loading from "@/components/Loading";
import { listOfSeriesType, SeriesNames } from "@/constants/Data";
import { LoadData } from "@/Functions";
import { ReactElement, useEffect, useState } from "react";

export default function TabTwoScreen(): ReactElement {
  const [listOfSeries, setListOfSeries]: [listOfSeriesType | null, React.Dispatch<React.SetStateAction<listOfSeriesType | null>>] = useState<listOfSeriesType | null>(null);
  const [serie, setSerie]: [SeriesNames, React.Dispatch<React.SetStateAction<SeriesNames>>] = useState<SeriesNames>(null);

  useEffect(() => {
    LoadData(setListOfSeries);
    console.log(listOfSeries);
  }, []);

  useEffect(() => {
    console.log('serie', serie);
  }, [serie]);

  if (listOfSeries === null) {
    return (
      <Loading />
    );
  }
  else if (serie === null) {
    return (
      <EditSeries listOfSeries={listOfSeries} setSeriesList={setListOfSeries} setSeries={setSerie} />
    );
  }
  else {
    return (
      <Loading />
    );
  }
}

