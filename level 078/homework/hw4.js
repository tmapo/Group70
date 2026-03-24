// 4) შექმენი რიცხვების მასივი -8, -2, 0, 3, 6, 9, 11.
// ამოიღე ყველა უარყოფითი რიცხვი,
// დარჩენილი რიცხვებიდან თითოეულს დაუმატე 5,
// დატოვე მხოლოდ 10-ზე ნაკლები შედეგები
// და დაბეჭდე ისინი.

const nums = [-8, -2, 0, 3, 6, 9, 11]

const posonly = nums.filter(num => num > 0)

const mapped = posonly.map(num => {
    return num += 5
})

const lesst10 = mapped.filter(num => num < 10)

console.log(lesst10)