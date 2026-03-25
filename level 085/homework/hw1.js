// 1) მოცემულია მასივი:
// const numbers = [10, 20, 30, 40, 50, 60]
// Destructuring-ის გამოყენებით:
// გამოტოვეთ პირველი ელემენტი
// მეორე ელემენტი შეინახეთ secondNumber ცვლადში
// მესამე ელემენტი შეინახეთ thirdNumber ცვლადში
// დანარჩენი ელემენტები შეინახეთ restNumbers მასივში
// დაბეჭდეთ ყველა ცვლადი.

const numbers = [10, 20, 30, 40, 50, 60]

const [,secondNumber,thirdNumber, ...restNumbers] = numbers

console.log(secondNumber , thirdNumber , restNumbers)