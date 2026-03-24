// 3) შექმენი რიცხვების მასივი 1, 3, 5, 7, 9.
// თითოეულ რიცხვს დაუმატე მისი პოზიციის ნომერი მასივში,
// დატოვე მხოლოდ ის შედეგები, რომლებიც კენტია,
// და გამოთვალე მათი ნამრავლი.

const nums = [1, 3, 5, 7, 9]

const nums1 = nums.map(num => {
    return num + nums.indexOf(num)
})

const odd = nums1.filter(num => num % 2 != 0)

const total = odd.reduce((num1 , num2) => {
    return num1 * num2
})

console.log(total)
