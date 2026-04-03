// 6. შექმენი ფაილი sumNumbers.js. დაწერე ფუნქცია sumTo(n) რომელიც for loop-ის გამოყენებით დაითვლის 1-დან n-მდე რიცხვების ჯამს და დააბრუნებს შედეგს. ეს ფუნქცია გააკეთე default export. შემდეგ main.js-ში დააიმპორტე ეს ფუნქცია და გამოიძახე console.log-ში.

const sumTo  = (n) => {
    let total = 0
    for (let i = 0 ; i < n; i++) {
        total += i
    }
    return total
}


export default sumTo