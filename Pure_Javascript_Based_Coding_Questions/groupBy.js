const groupValues = (names) => {
  const reducedObject = names.reduce((accumulator, current) => {
    const firstLetter = current[0];
    if (accumulator[firstLetter]) {
      accumulator[firstLetter] = accumulator[firstLetter].concat(current);
    } else {
      accumulator[firstLetter] = [current];
    }
    return accumulator;
  }, {});

  const keys = Object.keys(reducedObject);
  const sortedKeys = keys.sort().map((key) => {
    return {
      [key]: reducedObject[key],
    };
  });
  return sortedKeys;
};

//output - [
//   { A: [ 'Aaron', 'Atul', 'Anthony' ] },
//   { B: [ 'Bernard' ] },
//   { R: [ 'Richard', 'Riley' ] },
//   { Z: [ 'Zack' ] }
// ]
const names = [
  "Bernard",
  "Richard",
  "Riley",
  "Aaron",
  "Atul",
  "Anthony",
  "Zack",
];
const output = groupValues(names);
console.log(output);
