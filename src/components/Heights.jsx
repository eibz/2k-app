import React, { useContext } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { availableHeights, heightsPerPositionRange } from '../db/heightsObject';
import { DataContext } from './dataContext';

export default function Heights() {
  const appData = useContext(DataContext);
  const [value, setValue] = React.useState(0);

  // this sets the label for the draggable hover thingy
  function valueLabelFormat(number) {
    if (number) {
      return availableHeights[number].label;
    }
    return availableHeights[0].label;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkHeightForPositionMin = () => {
    if (appData.position) {
      const chosenHeight = appData.position;
      return heightsPerPositionRange[chosenHeight][0] - 1;
    }
    return 0; // minimum
  };

  const checkHeightForPositionMax = () => {
    if (appData.position) {
      const chosenHeight = appData.position;
      return heightsPerPositionRange[chosenHeight][1];
    }
    return 22; // TODO: can probably set it to heightsPerPositionRange.length, but it returns undefined currently
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom>
        Select your height
      </Typography>
      <Slider
        disabled={appData.heightDisabled}
        value={value}
        min={checkHeightForPositionMin()}
        step={1}
        max={checkHeightForPositionMax()}
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
