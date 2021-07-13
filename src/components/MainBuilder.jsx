import React from 'react';
import Heights from './Heights';
import Positions from './Positions';
import Wingspans from './Wingspans';
import { DataProvider } from './dataContext';

export default function MainBuilder() {
  return (
    <div style={{ margin: `${100}px` }}>
      <DataProvider>
        <Positions />
        <Heights />
        <Wingspans />
      </DataProvider>
    </div>
  );
}
