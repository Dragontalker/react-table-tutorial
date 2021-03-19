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

    return (
        <table>
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    )
}