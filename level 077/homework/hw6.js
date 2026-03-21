// 6)შექმენი ფასების მასივი 30, 60, 80, 45, 100. filter მეთოდით დატოვე მხოლოდ 50-ზე მეტი ფასები, map მეთოდით თითოეული ფასს დააკელი 10, reduce მეთოდით იპოვე ჯამი და დაბეჭდე.

const nums = [30, 60, 80, 45, 100]

const nums50 = nums.filter(num => num > 50)
const mapped = nums50.map(num => {
    return num - 10 
})

const total = mapped.reduce((num1 , num2) => {
    return num1 + num2
})

console.log(total)