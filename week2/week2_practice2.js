const menus = ["떡볶이", "만두", "오뎅", "사이다", "콜라"];
const orders = ["오뎅", "콜라", "만두"];

function isAvailableToOrder(menus, orders) {
  menusSet = new Set(menus);
  for (let order of orders) {
    if (!menusSet.has(order)) {
      // Set에서는 쉽게 배열 내용물을 확인할 수 있다!!!!!!!
      return false;
    }
  }
  return true;
}

console.log(isAvailableToOrder(menus, orders));
