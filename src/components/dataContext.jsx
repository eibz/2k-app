// Taken from https://codesandbox.io/s/6tbzy?file=/src/dataContext.js:0-533
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export const DataProvider = ({ children }) => {
  const [heightDisabled, setHeightDisabled] = useState(true);
  const [wingspanDisabled, setWingspantDisabled] = useState(true);
  const [position, setPosition] = useState('');

  return (
    <DataContext.Provider
      value={{
        heightDisabled,
        setHeightDisabled,
        wingspanDisabled,
        setWingspantDisabled,
        position,
        setPosition,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
