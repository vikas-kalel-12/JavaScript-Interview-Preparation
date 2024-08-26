// const s = "anagram",
//   t = "nagaram";

//output : true

const s = "rat",
  t = "car";

//output : false

const isValidAnagram = () => {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort().join();
  const sortedT = t.split("").sort().join();
  if (sortedS === sortedT) return true;
  return false;
};

console.log(isValidAnagram());
