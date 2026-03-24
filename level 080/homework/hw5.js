// 5) მოცემულია ტექსტი.
// დაწერეთ პროგრამა, რომელიც დაითვლის ტექსტში თითოეული სიტყვის გამეორების რაოდენობას.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "i like Georgia i like Goa Goa is Goated"
const listed = text.split(" ")

const counter = listed.reduce((count , word) => {
    count[word] = (count[word] || 0) + 1
    return count
} , {})

console.log(counter)