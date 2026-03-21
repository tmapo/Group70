// 8)შექმენი რიცხვების მასივი -5, -10, 8, -3, 2. filter მეთოდით დატოვე მხოლოდ უარყოფითი რიცხვები, map მეთოდით გადაიყვანე დადებით რიცხვებში, sort მეთოდით დაალაგე კლებადობით და reduce მეთოდით იპოვე ჯამი.

const nums = [-5, -10, 8, -3, 2]

const filtered = nums.filter(num => num < 0)
const mapped = filtered.map(num => {
    return -num
})

mapped.sort((a , b ) => b - a)

const total = mapped.reduce((num1 , num2) => {
    return num1 + num2
})

console.log(total)