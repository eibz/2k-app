import React, { useContext } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { DataContext } from './dataContext';
import availableHeights from '../db/heightsObject';

function valueLabelFormat(value) {
  return availableHeights[value].label;
}

export default function Heights() {
  const appData = useContext(DataContext);
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom>
        Select your height
      </Typography>
      <Slider
        disabled={appData.heightDisabled}
        value={value}
        min={0}
        step={1}
        max={22}
        marks={availableHeights}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <div>{appData.position}</div>
    </div>
  );
}
