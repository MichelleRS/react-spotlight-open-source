import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';

const dataList = [
  { id: 1, name: 'The Day Robert Palins Murdered Me', season: '1', episode: '1' },
  { id: 2, name: 'Qualstarr Trial', season: '2', episode: '3' },
  { id: 3, name: "Driver's Ed", season: '2', episode: '6' },
];

export default function TableComponent() {
  return (
    <Table data={dataList}>
      {/* column 1 */}

      {/* column 2 */}

      {/* column 3 */}

      {/* column 4 */}
    </Table>
  );
}
