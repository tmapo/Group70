// 4) მოცემულია ობიექტი:
// const order = {
// orderId: 555,
// customer: {
// name: "Ana",
// age: 16
// },
// items: [
// { product: "Phone", price: 1000 },
// { product: "Case", price: 20 }
// ]
// }
// Nested destructuring-ის გამოყენებით:
// customer-იდან აიღეთ name (rename → customerName)
// items მასივიდან აიღეთ პირველი პროდუქტის product და price
// მეორე პროდუქტიდან აიღეთ მხოლოდ product (rename → accessoryName)
// თუ items მასივი არ არსებობს, გამოიყენეთ default ცარიელი მასივი


const order = {
    orderId: 555,
    customer: {
        name: "Ana",
        age: 16
    },

    items: [
        { product: "Phone", price: 1000 },
        { product: "Case", price: 20 }
    ]

}

const {orderId , customer : {name : customerName , age} , items : {product : accessoryName,}} = order
