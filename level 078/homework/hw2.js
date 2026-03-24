// 2) შექმენი რიცხვების მასივი 5, 11, 2, 8, 14, 7.
// დატოვე მხოლოდ ლუწი რიცხვები,
// თითოეული მათგანი აიყვანე კვადრატში,
// დაალაგე მიღებული რიცხვები ზრდადობით
// და ეკრანზე გამოიტანე თითოეული მათგანი.

const nums = [5, 11, 2, 8, 14, 7]

const evenonly = nums.filter(num => num % 2 === 0)

const x2 = evenonly.map(num => {
    return num * num
})

x2.sort()

for (i = 0 ; i < x2.length ; i++){
    console.log(x2[i])
}