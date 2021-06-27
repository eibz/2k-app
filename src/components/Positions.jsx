import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DataContext } from './dataContext';

const positions = ['C', 'PF', 'SF', 'SG', 'PG'];
const listItems = positions.map((arr) => <MenuItem key={arr} value={arr}>{arr}</MenuItem>);

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Positions() {
  const appData = useContext(DataContext);
  const classes = useStyles();
  const [position, setPosition] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setPosition(value); // changes it locally on the input
    appData.setHeightDisabled(false); // if the user chooses any Position the height field becomes available
    appData.setPosition(value); // used in Heights
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Position</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={position}
          onChange={handleChange}
        >
          {listItems}
        </Select>
      </FormControl>
    </div>
  );
}
