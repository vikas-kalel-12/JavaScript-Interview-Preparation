const arr = [5, 6, 7, 1, 8, 2, 3, 4];

const minInRotatedSortedArray = () => {
  if (arr.length === 1) {
    return arr[0];
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
};

console.log(minInRotatedSortedArray());
