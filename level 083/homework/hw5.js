// 5) მოცემულია მასივი:
// ["BMW", "Mercedes", "Audi", "Toyota"]
// დესტრუქტურინგით აიღე პირველი და მესამე ელემენტი.

const cars = ["BMW", "Mercedes", "Audi", "Toyota"]

const [car1 ,, car3] = cars

console.log(car1 , car3)