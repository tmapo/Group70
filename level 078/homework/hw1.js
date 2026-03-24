// 1) შექმენი რიცხვების მასივი 3, 6, 9, 12, 15, 18.
// თითოეული რიცხვი გაზარდე ორჯერ,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 20-ზე მეტია,
// იპოვე მათი ჯამი
// და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.


const nums = [3, 6, 9, 12, 15, 18]

const nums2x = nums.map(num => {
    return num * 2
})

const filtered = nums2x.filter(num => num > 20)
const total = filtered.reduce((num1 , num2) => {
    return num1 + num2
})



console.log(total)