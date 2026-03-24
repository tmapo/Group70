// 8) შექმენი რიცხვების მასივი 3, 5, 7, 9, 11.
// თითოეული რიცხვი გაამრავლე საკუთარ თავზე,
// დატოვე მხოლოდ ის შედეგები, რომლებიც ლუწია,
// გამოთვალე რამდენი ასეთი რიცხვი მიიღება
// და დაბეჭდე ეს რაოდენობა.

const nums = [3, 5, 7, 9, 11]

const numsx = nums.map(num => {
    return num & num 
})

const evenonly = numsx.filter(num => num % 2 != 0)

console.log(evenonly.length)