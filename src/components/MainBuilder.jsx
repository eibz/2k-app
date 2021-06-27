import React from 'react';
import Heights from './Heights';
import Positions from './Positions';
import { DataProvider } from './dataContext';

export default function MainBuilder() {
  return (
    <div style={{ margin: `${100}px` }}>
      <DataProvider>
        <Positions />
        <Heights />
      </DataProvider>
    </div>
  );
}
