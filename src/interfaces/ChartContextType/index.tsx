import { IChart } from '../IChart';

export interface ChartContextType {
  chartsState: IChart[];
  setChartsState: React.Dispatch<React.SetStateAction<IChart[]>>;
}
