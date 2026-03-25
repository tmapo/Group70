// 5) მოცემულია სამი ცვლადი:
// let a = 1
// let b = 2
// let c = 3
// Destructuring-ის გამოყენებით:
// გააკეთეთ ისე, რომ a-ში ჩავიდეს c-ის მნიშვნელობა
// b დარჩეს უცვლელი
// c-ში ჩავიდეს a-ის ძველი მნიშვნელობა
// (არ გამოიყენოთ დამატებითი ცვლადები)
// შემდეგ მოცემულია ობიექტი:
// const teacher = {
// name: "Maia",
// subject: "Math",
// experience: 5,
// school: "High School",
// city: "Kutaisi"
// }

// Destructuring-ის გამოყენებით:

// name გადაარქვით teacherName
// subject გადაარქვით mainSubject
// experience შეინახეთ ცვლადში yearsOfExperience
// დანარჩენი მონაცემები შეინახეთ სხვა ობიექტში restInfo
// დაბეჭდეთ ყველა შედეგი.

let a = 1;
let b = 2;
let c = 3;

[a , c] = [c , a]

console.log(a , b , c);

const teacher = {
name: "Maia",
subject: "Math",
experience: 5,
school: "High School",
city: "Kutaisi"
}

const {name : teacherName , subject : mainSubject , experience : yearsOfExperience , ...restinfo} = teacher


console.log(teacherName , mainSubject , yearsOfExperience , restinfo)