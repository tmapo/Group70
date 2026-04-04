// 4.შექმენი ფაილი arrayUtils.js, სადაც დაწერ ფუნქციებს sumArray(arr) და findMax(arr), გააერთიანე ერთ ობიექტში და export გააკეთე, შემდეგ app.js-ში გამოიყენე.

const sumArray = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

const findMax = (arr) => {
    let max = arr[0]
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

export const obj = { 
    arrtotal : sumArray,
    maxnum : findMax
}