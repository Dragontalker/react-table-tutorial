import React from 'react';
import './input.css';

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            <input 
                value={filter || ''}
                placeholder={'Search table here...'}
                onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
};
