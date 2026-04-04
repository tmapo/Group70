// 5.შექმენი ფაილი user.js, სადაც შექმნი ობიექტს user (name, age) და ასევე ფუნქციას greet(), რომელიც დააბრუნებს მისალმებას, გააკეთე export და სხვა ფაილში გამოიტანე ინფორმაცია.

export const user = {
    name : "Apolon",
    age : 15
}

export const greet = () => {
    return "hello "  + user.name + "!" 
}

