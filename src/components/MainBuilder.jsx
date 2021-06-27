import React from 'react';
import Heights from './Heights';
import Positions from './Positions';

export default function MainBuilder() {
  return (
    <div style={{ margin: `${100}px` }}>
      <Positions />
      <Heights />
    </div>
  );
}
