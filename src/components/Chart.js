import React from 'react';
import { VictoryPie } from 'victory';

// const chartData = [
//   { id: 1, name: 'The Day Robert Palins Murdered Me', season: '1', episode: '1' },
//   { id: 2, name: 'Qualstarr Trial', season: '2', episode: '3' },
//   { id: 3, name: "Driver's Ed", season: '2', episode: '6' },
// ];

const data = [
  { animal: 'Cats', number: 14 },
  { animal: 'Dogs', number: 5 },
];

export default function ChartComponent() {
  return <VictoryPie data={data} x="animal" y="number" />;
}
