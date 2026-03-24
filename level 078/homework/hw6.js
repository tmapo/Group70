// 6) შექმენი რიცხვების მასივი 2, 4, 6, 8, 10, 12.
// თითოეული რიცხვი გაზარდე 3-ჯერ,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 20-ს არ აღემატება,
// გამოთვალე მათი ჯამი
// და დაბეჭდე ყველაზე პატარა მიღებული რიცხვი.

const nums = [2, 4, 6, 8, 10, 12]

const nums3x = nums.map(num => {
    return num * 3 
})

const lesst20 = nums3x.filter(num => num < 20)

const total = lesst20.reduce((num1 , num2) => {
    return num1 + num2
})

console.log(total)