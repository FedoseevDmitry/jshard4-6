const getAveragePrice = (arr) => {
  const averageCashboxPrices = [];

  for (let i = 0; i < arr.length; i++) {
    let averagePrice = arr[i][1] / arr[i][0];

    averageCashboxPrices.push(averagePrice);
  };

  return averageCashboxPrices;
};

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

console.log(getAveragePrice(allCashbox));