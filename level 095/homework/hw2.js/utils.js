// 2.შექმენი ფაილი utils.js, სადაც დაწერ სამ ფუნქციას min(a, b), max(a, b) და average(a, b), შემდეგ გააერთიანე ერთ ობიექტში utils და გააკეთე export, ხოლო app.js-ში დააიმპორტე და დაბეჭდე შედეგები.

const min = (a , b) => {
    if (a > b) {
        return b
    }
    else {
        return a
    }
}

const max = (a , b) => {
    if (a < b) {
        return b
    }
    else {
        return a
    }
}

const average = (a , b) => {
    return (a + b) / 2
}

export const obj = {
    min : min,
    max : max,
    avg : average
}