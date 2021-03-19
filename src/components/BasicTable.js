import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

export const BasicTable = () => {

    useTable({
        columns: COLUMNS,
        data: MOCK_DATA
    })

    return (
        <div>

        </div>
    )
}