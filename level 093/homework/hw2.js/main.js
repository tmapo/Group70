// 2 შექმენი ფუნქცია რომელიც მიიღებს array-ს და target რიცხვს ფუნქციამ უნდა მოძებნოს target array-ში while loop-ის გამოყენებით თუ იპოვა დააბრუნოს index თუ ვერ იპოვა დააბრუნოს ტექსტი ვერ მოიძებნა ფუნქცია უნდა იყოს ცალკე მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული

import { indexfinder } from "./funcfile.js";

let arr1 = [100 , 123 , 54 , 90 , 872]
let arr2 = [100 , 123 , 55 , 90 , 872]

console.log(indexfinder(arr1 , 54))  //2
console.log(indexfinder(arr2 , 54))  //Target not found.