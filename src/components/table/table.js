import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';

import { getTickersSelector } from '../../redux/tickers/selectors';

const Table = () => {
  const state = useSelector(getTickersSelector);

  const columnsInTab = () => {
    const columnsArr = [];
    const arrKeys = Object.keys(state[0]);
    arrKeys.map((el, ix) => {
      const columnItemHeader = {
        Header: '',
        accessor: '',
      };
      let i = ix + 1;
      columnItemHeader.Header = el;
      columnItemHeader.accessor = 'col' + i;
      columnsArr.push(columnItemHeader);
    });
    return columnsArr;
  };

  const dataInTab = () => {
    const dataArr = [];
    const arrKeys = Object.keys(state[0]);
    state.map(item => {
      const columnItemRow = {};
      arrKeys.map((el, ix) => {
        let i = ix + 1;
        let key = 'col' + i;
        columnItemRow[key] = item[el];
      });
      dataArr.push(columnItemRow);
    });
    return dataArr;
  };

  const columns = useMemo(() => columnsInTab(), [state]);

  const data = useMemo(() => dataInTab(), [state]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      style={{ border: 'solid 1px blue', margin: '30px auto' }}
    >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  padding: '2px 10px',
                  borderBottom: 'solid 3px grey',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
