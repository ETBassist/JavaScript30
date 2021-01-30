
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
function oneOver19(people) {
  let currentYear = new Date("January 23, 2021").getFullYear();
  return people.some(person => (currentYear - person.year) >= 19);
}

function allOver19(people) {
  let currentYear = new Date("January 23, 2021").getFullYear();
  return people.every(person => (currentYear - person.year) >= 19);
}

function findById(comments, id) {
  return comments.find(comment => comment.id === id);
}

function removeById(comments, id) {
  let index = comments.findIndex(comments => comments.id === id);
  comments.splice(index, 1);
}

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

module.exports = {
  oneOver19,
  allOver19,
  findById,
  removeById
}
