// 4) შექმენი ობიექტი:
// const product = {
//   title: "Laptop",
//   price: 1500,
//   inStock: true
// };
// შექმენი ახალი ობიექტი სადაც:
// price შეიცვლება 1200-ზე
// inStock შეიცვლება false-ზე
// Spread-ის გამოყენებით.

const product = {
  title: "Laptop",
  price: 1500,
  inStock: true
};

const newproduct = {
    ...product,
    price: 1200,
    inStock: false
}

console.log(newproduct)