// const allHeights = ['5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"', '7\'1"', '7\'2"', '7\'3"'];

const availableHeights = [
  {
    value: 0,
    label: '5\'5"',
    positions: ['PG'], // this KV is currently not used anywhere, but it helps to understand the heightsPerPositionRange variable
  },
  {
    value: 1,
    label: '5\'6"',
    positions: ['PG'],
  },
  {
    value: 2,
    label: '5\'7"',
    positions: ['PG'],
  },
  {
    value: 3,
    label: '5\'8"',
    positions: ['PG'],
  },
  {
    value: 4,
    label: '5\'9"',
    positions: ['PG'],
  },
  {
    value: 5,
    label: '5\'10"',
    positions: ['PG'],
  },
  {
    value: 6,
    label: '5\'11"',
    positions: ['PG'],
  },
  {
    value: 7,
    label: '6\'0"',
    positions: ['PG', 'SG'],
  },
  {
    value: 8,
    label: '6\'1"',
    positions: ['PG', 'SG'],
  },
  {
    value: 9,
    label: '6\'2"',
    positions: ['PG', 'SG'],
  },
  {
    value: 10,
    label: '6\'3"',
    positions: ['PG', 'SG'],
  },
  {
    value: 11,
    label: '6\'4"',
    positions: ['PG', 'SG'],
  },
  {
    value: 12,
    label: '6\'5"',
    positions: ['PG', 'SG', 'SF'],
  },
  {
    value: 13,
    label: '6\'6"',
    positions: ['PG', 'SG', 'SF'],
  },
  {
    value: 14,
    label: '6\'7"',
    positions: ['PG', 'SG', 'SF', 'PF'],
  },
  {
    value: 15,
    label: '6\'8"',
    positions: ['PG', 'SG', 'SF', 'PF'],
  },
  {
    value: 16,
    label: '6\'9"',
    positions: ['SG', 'SF', 'PF', 'C'],
  },
  {
    value: 17,
    label: '6\'10"',
    positions: ['SF', 'PF', 'C'],
  },
  {
    value: 18,
    label: '6\'11"',
    positions: ['PF', 'C'],
  },
  {
    value: 19,
    label: '7\'0"',
    positions: ['PF', 'C'],
  },
  {
    value: 20,
    label: '7\'1"',
    positions: ['C'],
  },
  {
    value: 21,
    label: '7\'2"',
    positions: ['C'],
  },
  {
    value: 22,
    label: '7\'3"',
    positions: ['C'],
  },
];

// these have to correspond to the value set above
// e.g. PG min height is 0 (5'5") and max is 15 (6'8")
const heightsPerPositionRange = {
  C: [16, 22],
  PF: [14, 19],
  SF: [12, 17],
  SG: [7, 16],
  PG: [0, 15],
};

export { availableHeights, heightsPerPositionRange };
