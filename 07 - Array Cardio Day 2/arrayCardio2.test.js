const cardio = require('./arrayCardio2')

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

var moreComments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


test('returns true if one person over 19', () => {
  expect(cardio.oneOver19(people)).toBe(true);
});

test('returns false if not every person is over 19', () => {
  expect(cardio.allOver19(people)).toBe(false);
});

test('returns a single request object by id', () => {
  expect(cardio.findById(comments, 823423)).toStrictEqual({ text: 'Super good', id: 823423 });
});

test('can delete an object from an array with findIndex', () => {
  cardio.removeById(moreComments, 823423)
  expect(moreComments).not.toContain({ text: 'Super good', id: 823423 });
});

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
