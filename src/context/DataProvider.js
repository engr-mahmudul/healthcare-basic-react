import React, { createContext } from 'react';
import useFakeData from '../hooks/useFakeData';

export const DataContext = createContext();
const DataProvider = ({ children }) => {
    const allContext = useFakeData()
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;