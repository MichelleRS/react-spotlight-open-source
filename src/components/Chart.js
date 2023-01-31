import React from 'react';
import { VictoryPie } from 'victory';

const data = [
  { animal: 'Cats', number: 14 },
  { animal: 'Dogs', number: 5 },
];

export default function ChartComponent() {
  return (
    <VictoryPie height={200} colorScale={['orange', 'gold']} data={data} x="animal" y="number" />
  );
}
