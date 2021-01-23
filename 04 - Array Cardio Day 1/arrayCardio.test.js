const functions = require('./arrayCardio')

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Shaw, George Bernard', 'Neutron, Jimmy', 'Thorne, Brooke', 'Carlisle, Brandi'
];

test('finds all people from the 1500s', () => {
  let expected = [
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
  ];
  expect(functions.sixteenthCenturyFolk(inventors)).toStrictEqual(expected);
});

test('return an array of just inventor names', () => {
  let expected = [
    'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler',
    'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode',
    'Lise Meitner', 'Hanna Hammarström'
  ];
  expect(functions.inventorNames(inventors)).toStrictEqual(expected);
});

test('returns an array ordered by year', () => {
  let inventorPeople = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
  ];
  let expected = [
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }
  ];
  expect(functions.ordered(inventorPeople)).toStrictEqual(expected);
});

test('returns the total lifespan of inventors', () => {
  expect(functions.totalLifespan(inventors)).toStrictEqual(861);
});

test('returns ordered inventors by years lived', () => {
  let expected = [
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
  ];
  expect(functions.inventorsByLifespan(inventors)).toStrictEqual(expected);
});

test('orders people by last name', () => {
  let expected = [
    'Carlisle, Brandi', 'Neutron, Jimmy', 'Shaw, George Bernard', 'Thorne, Brooke'
  ]
  expect(functions.peopleByLastName(people)).toStrictEqual(expected);
});

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

test('counts instances of each datapoint', () => {
  let expected = {
    'car': 5,
    'truck': 3,
    'bike': 2,
    'walk': 2,
    'van': 2
  };
  expect(functions.dataCount(data)).toStrictEqual(expected);
});
