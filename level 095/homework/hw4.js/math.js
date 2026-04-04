// 3.შექმენი ფაილი math.js, სადაც დაწერ ფუნქციებს multiply(a, b) და divide(a, b), გააკეთე default export ობიექტის სახით და app.js-ში დააიმპორტე და გამოიყენე.

const multiply = (a , b) => { 
    return a * b
}

const divide = (a , b) => {
    return a / b
}

const  obj = {
    x2 : multiply,
    x05 : divide
}

export default obj

