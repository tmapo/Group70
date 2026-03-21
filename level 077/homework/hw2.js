// 2)შექმენი რიცხვების მასივი 5, 8, 3, 12, 10, 7. filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები, map მეთოდით თითოეული გაამრავლე 2-ზე, sort მეთოდით დაალაგე ზრდადობით და forEach მეთოდით დაბეჭდე თითოეული რიცხვი.

const nums = [5, 8, 3, 12, 10, 7]

const even = nums.filter(num => num % 2 === 0)

const even2x = even.map(num => {
    return num * 2
})

even2x.sort()

even2x.forEach( num =>  {
    console.log(num)
})
