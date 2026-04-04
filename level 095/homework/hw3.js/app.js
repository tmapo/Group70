// 2.შექმენი ფაილი stringUtils.js, სადაც დაწერ ფუნქციებს capitalize(str) და reverse(str), გააერთიანე ერთ ობიექტში stringUtils და გააკეთე export, შემდეგ სხვა ფაილში გამოიყენე ეს ფუნქციები.

import { stringUtils } from "./stringutils.js";

let fruitloverapo = "@apo : I love fruits. Mostly apples & peaches. apples + peaches = LIFE!! dont you love fruits?? #1 stuff ever."

console.log(stringUtils.capslock(fruitloverapo))
console.log(stringUtils.reversedstr(fruitloverapo))