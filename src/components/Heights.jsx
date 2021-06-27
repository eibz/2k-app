import React, { useContext } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { DataContext } from './dataContext';

const availableHeights = ['5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"', '7\'1"', '7\'2"', '7\'3"'];

function valueLabelFormat(value) {
  return availableHeights[value];
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
        max={21}
        marks
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
