import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { DataContext } from './dataContext';
import availableHeights from '../db/heightsObject';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: '50px auto',
    maxWidth: 300,
  },
}));

export default function Heights() {
  const appData = useContext(DataContext);
  const [value, setValue] = React.useState(1);
  const classes = useStyles();

  function valueLabelFormat(number) {
    console.log(`chosen position: ${appData.position}`);
    console.log(`positions available for chosen height: ${availableHeights[value].positions}`);
    console.log(availableHeights[value].positions.includes(appData.position));
    // const nanoIndexes = availableHeights.flatMap((car, i) => car === 'C' ? i : []);
    return availableHeights[number].label;
  }

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
        min={5}
        step={1}
        max={15} // max 22
        marks={availableHeights}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        className={classes.formControl}
      />
      <div>{appData.position}</div>
    </div>
  );
}
