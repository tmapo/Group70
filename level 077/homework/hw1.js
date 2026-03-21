// 1)შექმენი რიცხვების მასივი 5, 7, 10, 8, 12, 4. map მეთოდით თითოეული რიცხვი გაამრავლე 3-ზე, filter მეთოდით დატოვე მხოლოდ 20-ზე მეტი რიცხვები, reduce მეთოდით იპოვე მათი ჯამი და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.



const nums = [5, 7, 10, 8, 12, 4]

const nums3x = nums.map(function(num) {
    return num * 3
})

const moret20 = nums3x.filter(num => num > 20 )

const total = moret20.reduce((all, num) => {
    return all + num
} , 0 )

console.log(nums)
console.log(nums3x)
console.log(moret20)
console.log(total)
console.log(moret20.length)