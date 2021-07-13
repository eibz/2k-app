const availableWingspans = [
  {
    label: '5\'7"',
    positions: ['PG'],
  },
  {
    label: '5\'8"',
    positions: ['PG'],
  },
  {
    label: '5\'9"',
    positions: ['PG'],
  },
  {
    label: '5\'10"',
    positions: ['PG'],
  },
  {
    label: '5\'11"',
    positions: ['PG'],
  },
  {
    label: '6\'0"',
    positions: ['PG', 'SG'],
  },
  {
    label: '6\'1"',
    positions: ['PG', 'SG'],
  },
  {
    label: '6\'2"',
    positions: ['PG', 'SG'],
  },
  {
    label: '6\'3"',
    positions: ['PG', 'SG'],
  },
  {
    label: '6\'4"',
    positions: ['PG', 'SG'],
  },
  {
    label: '6\'5"',
    positions: ['PG', 'SG', 'SF'],
  },
  {
    label: '6\'6"',
    positions: ['PG', 'SG', 'SF'],
  },
  {
    label: '6\'7"',
    positions: ['PG', 'SG', 'SF', 'PF'],
  },
  {
    label: '6\'8"',
    positions: ['PG', 'SG', 'SF', 'PF'],
  },
  {
    label: '6\'9"',
    positions: ['SG', 'SF', 'PF', 'C'],
  },
  {
    label: '6\'10"',
    positions: ['SF', 'PF', 'C'],
  },
  {
    label: '6\'11"',
    positions: ['PF', 'C'],
  },
  {
    label: '7\'0"',
    positions: ['PF', 'C'],
  },
  {
    label: '7\'1"',
    positions: ['C'],
  },
  {
    label: '7\'2"',
    positions: ['C'],
  },
  {
    label: '7\'3"',
    positions: ['C'],
  },
  {
    label: '7\'4"',
    positions: ['C'],
  },
  {
    label: '7\'5"',
    positions: ['C'],
  },
  {
    label: '7\'6"',
    positions: ['C'],
  },
  {
    label: '7\'7"',
    positions: ['C'],
  },
  {
    label: '7\'8"',
    positions: ['C'],
  },
  {
    label: '7\'9"',
    positions: ['C'],
  },
  {
    label: '7\'10"',
    positions: ['C'],
  },
  {
    label: '7\'11"',
    positions: ['C'],
  },
  {
    label: '8\'0"',
    positions: ['C'],
  },
  {
    label: '8\'1"',
    positions: ['C'],
  },
];

// indexes the array
availableWingspans.forEach((item, index) => {
  const arrItem = item;
  arrItem.value = index;
});

function findHeightsPerPos(position) {
  let minHeight;
  let maxHeight;
  // loop through the object
  availableWingspans.forEach((item) => {
    // checks if the the position exists in the current iteration
    const checkIfPosInArr = item.positions.find((currentValue) => {
      if (currentValue === position) {
        return true;
      }
      return false;
    });

    if (checkIfPosInArr) {
      // populates minHeight in the first instance
      if (!minHeight) {
        minHeight = item.value;
      } else {
        maxHeight = item.value; // then populates maxHeight until it doesn't find any other instances
      }
    }
  });
  // finally return as array
  return [minHeight, maxHeight];
}

// these have to correspond to the value set above
// e.g. PG min height is 0 (5'5") and max is 15 (6'8")
const heightsPerPositionRange = {
  C: findHeightsPerPos('C'),
  PF: findHeightsPerPos('PF'),
  SF: findHeightsPerPos('SF'),
  SG: findHeightsPerPos('SG'),
  PG: findHeightsPerPos('PG'),
};

export { availableWingspans, heightsPerPositionRange };
