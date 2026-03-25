// 6) მოცემულია პროდუქტების სია, სადაც თითოეულ პროდუქტს აქვს ფასი და რაოდენობა.
// დაწერეთ პროგრამა, რომელიც თითოეული პროდუქტის საერთო ღირებულებას გამოთვლის და შემდეგ დაადგენს ყველა პროდუქტის ჯამურ ფასს.
// ამოცანა შეასრულეთ forEach და reduce მეთოდების გამოყენებით.

const lst = [
    {
        name : "milk",
        price : 5,
        count : 2
    } ,
    {
        name : "eggs",
        price : 1, 
        count : 20
    },
    {
        name : "sugar",
        price : 10, //per KG
        count : 3
    } ,
    {
        name : "rtx5090",
        price : 100000,
        count : 1
    }
]

lst.forEach(product => {
    lst[lst.indexOf(product)] = product.price * product.count
})

const total = lst.reduce((total , num) => {
    return total + num
})

console.log(total)