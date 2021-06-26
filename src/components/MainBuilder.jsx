import React from 'react';
import Heights from './Heights';
import Positions from './Positions';

function MainBuilder() {
  return (
    <div style={{ margin: `${100}px` }}>
      <Positions />
      <Heights />
    </div>
  );
}

export default MainBuilder;
