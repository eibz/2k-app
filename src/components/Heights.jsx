import React from 'react';

function Heights() {
  getInitialState = () => ({ value: 3 });
  function handleChange(event) {
    this.setState({ value: event.target.value });
  }
  return (
    <div>
      <input type="range" min="1" max="100" value={this.state.value} onChange={this.handleChange} />
    </div>
  );
}

export default Heights;
