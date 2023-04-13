export interface IChart {
  title: {
    text: string;
  };
  legend: {
    enabled: boolean;
  };
  series: {
    color: string;
    type: string;
    name: string;
    pointInterval?: number;
    pointIntervalUnit?: string;
    pointStart?: number;
    data: number[][];
  }[];
  xAxis: {
    type?: string;
  };
}
