// 7)შექმენი რიცხვების მასივი 5, 8, 10, 12, 7. map მეთოდით თითოეული რიცხვი გაამრავლე 4-ზე, filter მეთოდით დატოვე მხოლოდ 30-ზე მეტი რიცხვები, filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები და reduce მეთოდით იპოვე ჯამი.

const nums = [5, 8, 10, 12, 7]

const mapped = nums.map(num => {
    return num *4
})

const filtered = mapped.filter(num => num > 30 )
const filtered2 = filtered.filter(num => num % 2 === 0 )
const total = filtered2.reduce((num1 , num2) => {
    return num1 + num2
})

console.log(total)