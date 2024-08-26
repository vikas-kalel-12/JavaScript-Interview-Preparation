const arr = [4, 5, 6, 7, 1, 2, 3];
const key = 5;

//output =1

const searchInRotatedArray = () => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid; // found element here
    }
    if (arr[left] <= arr[mid]) {
      if (key > arr[left] && key < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (key > arr[mid] && key < arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1; // if not found
};

console.log(searchInRotatedArray());
