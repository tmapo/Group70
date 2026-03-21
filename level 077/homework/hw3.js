// 3)შექმენი რიცხვების მასივი 3, 4, 5, 7, 8. map მეთოდით თითოეულ რიცხვს დაუმატე 1, map მეთოდით მეორე ნაბიჯში გაამრავლე 2-ზე, filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი რიცხვები და reduce მეთოდით იპოვე ნამრავლი.

const nums = [3, 4, 5, 7, 8]

const nums3x = nums.map(num => {
    return (num += 1) * 2
})

const filtered = nums3x.filter(num => num > 10 )

const total = filtered.reduce((num1 , num2) => {
    return num1 * num2
})


console.log(total)