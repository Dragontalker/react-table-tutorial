import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({
        columns,
        data
    });

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => {
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => {
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                })
                            }
                        </tr>
                    })
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.maps(row => {
                        prepareRow(row)
                        return (
                            <tr>
                                {
                                    rows.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}