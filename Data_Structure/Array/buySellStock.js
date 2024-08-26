const arr = [8, 6, 9, 15, 67, 1, 90, 999];

const buySellStock = () => {
  let boughtPrice = arr[0];
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < boughtPrice) boughtPrice = arr[i];
    const sellPrice = arr[i] - boughtPrice;
    if (sellPrice > profit) profit = sellPrice;
  }
  return profit;
};

console.log(buySellStock());
