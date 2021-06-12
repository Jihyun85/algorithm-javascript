// 쓱 최대로 할인 적용하기
// Q.
// 다음과 같이 숫자로 이루어진 배열이 두 개가 있다.
// 하나는 상품의 가격을 담은 배열이고, 하나는 쿠폰을 담은 배열이다.
// 쿠폰의 할인율에 따라 상품의 가격을 할인 받을 수 있다.
// 이 때, 최대한 할인을 많이 받는다면 얼마를 내야 하는가?
// 단, 할인쿠폰은 한 제품에 한 번씩만 적용 가능하다.

let prices = [20000, 100000, 1500000]; // 상품 가격
let coupons = [10, 10, 10]; // % 단위 할인율

// const prices = [30000, 2000, 1500000];
// const coupons = [20, 40];

function getMaxDiscountedPrice(prices, coupons) {
  let sortedPrices = prices.sort((a, b) => b - a);
  let sortedCoupons = coupons.sort((a, b) => b - a);

  let minPrice = 0;

  for (let i in sortedPrices) {
    if (sortedCoupons[i]) {
      minPrice += sortedPrices[i] * (1 - sortedCoupons[i] * 0.01);
    } else {
      minPrice += sortedPrices[i];
    }
  }
  return minPrice;
}

console.log(getMaxDiscountedPrice(prices, coupons));
