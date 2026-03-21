// 4)შექმენი რიცხვების მასივი -5, 2, 3, 7, -1, 9. filter მეთოდით დატოვე მხოლოდ დადებითი რიცხვები, filter მეთოდით დატოვე მხოლოდ კენტი რიცხვები, map მეთოდით თითოეული გაამრავლე 5-ზე და forEach მეთოდით დაბეჭდე შედეგები.

const nums = [-5, 2, 3, 7, -1, 9]

const filtered = nums.filter(num => num > 0)

const filtered2 = filtered.filter(num => num % 2 != 0 )

const numsx5 = filtered2.map(num => {
    return num * 5 
})

numsx5.forEach(num => {
    console.log(num)
})