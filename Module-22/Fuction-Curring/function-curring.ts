//*Normal Function
const add = (a, b) => a + b;
console.log(add(5, 6));

//*Currying Function
const addCurrying = (a) => (b) => a + b;
const addCurrying2 = addCurrying(59);
console.log(addCurrying2(7));
console.log(addCurrying2(8));
type price = (discount: number) => (price: number) => number;
const totalPrice :price= (discount) => (price) => price - price * discount;
const dis25 = totalPrice(0.25);
console.log(dis25(100));
console.log(dis25(200));
console.log(dis25(847));
