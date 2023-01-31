import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
// import 'rsuite-table/lib/less/index.less';
import 'rsuite-table/dist/css/rsuite-table.css';

const dataList = [
  { id: 1, name: 'The Day Robert Palins Murdered Me', season: '1', episode: '1' },
  { id: 2, name: 'Qualstarr Trial', season: '2', episode: '3' },
  { id: 3, name: "Driver's Ed", season: '2', episode: '6' },
];

export default function TableComponent() {
  return (
    <Table data={dataList} bordered>
      {/* column 1: id */}
      <Column width={100} fixed resizable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      {/* column 2: episode name */}
      <Column width={300} fixed resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      {/* column 3: season */}
      <Column width={100} align="center" fixed resizable>
        <HeaderCell>Season</HeaderCell>
        <Cell dataKey="season" />
      </Column>

      {/* column 4: episode number */}
      <Column width={100} align="center" fixed resizable>
        <HeaderCell>Episode</HeaderCell>
        <Cell dataKey="episode" />
      </Column>
    </Table>
  );
}
