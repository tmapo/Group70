// 6) მოცემულია რიცხვების მასივი:
// [5, 12, 8, 20, 3]
// reduce გამოყენებით დაითვალე მხოლოდ ლუწი რიცხვების ჯამი

const nums = [5, 12, 8, 20, 3]

const evenonly = nums.reduce((total , num) => {
    if (num % 2 === 0) {
        total += num
    }
    return total
}, 0 )

console.log(evenonly)