import React from 'react';

function Positions() {
  const positions = ['C', 'PF', 'SF', 'SG', 'PG'];
  const listItems = positions.map((arr) => <option>{arr}</option>);

  return (
    <div>
      <label htmlFor="positions">Choose a position</label>
      <select name="positions" id="positions">
        {listItems}
      </select>
    </div>
  );
}

export default Positions;
