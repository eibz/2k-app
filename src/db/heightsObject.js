// const allHeights = ['5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"', '7\'1"', '7\'2"', '7\'3"'];

const availableHeights = [
  {
    label: '5\'6"',
    positions: ['PG'],
  },
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
];

// indexes the array
availableHeights.forEach((item, index) => {
  const arrItem = item;
  arrItem.value = index;
});

function findHeightsPerPos(position) {
  let minHeight;
  let maxHeight;
  // loop through the object
  availableHeights.forEach((item) => {
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

export { availableHeights, heightsPerPositionRange };
