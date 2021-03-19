import React from 'react';

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            Search: {' '}
            <input 
                value={filter || ''} 
            />
        </span>
    )
};
