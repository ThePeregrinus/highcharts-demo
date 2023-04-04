interface ICharData {
  title: { text: string };
  series: object[];
}

const createCharData = (n: number) => ({
  title: {
    text: `Chart${n + 1}`,
  },

  series: [
    {
      type: 'line',
      data: Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000)),
    },
  ],
  legend: {
    enabled: false,
  },
});

export const charts: Array<ICharData> = [];

for (let i = 0; i <= 20; i++) {
  charts.push(createCharData(i));
}
