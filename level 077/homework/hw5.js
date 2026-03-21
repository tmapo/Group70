// 5)შექმენი რიცხვების მასივი 5, 7, 3, 8, 6. map მეთოდით თითოეულ რიცხვს დაუმატე 2, filter მეთოდით დატოვე მხოლოდ 5-ზე მეტი რიცხვები, reduce მეთოდით იპოვე საშუალო და დაბეჭდე მთლიანი რიცხვი.

const nums = [5, 7, 3, 8, 6]

const nums2 = nums.map(num => {
    return num + 2
})

const filtered = nums2.filter(num => num > 5)

const avg = filtered.reduce( (num1 , num2) => {
    return (num1 + num2) / filtered.length
})

console.log(avg)