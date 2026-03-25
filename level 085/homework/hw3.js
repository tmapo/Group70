// 3) შექმენით ფუნქცია, რომელიც იღებს მასივს შემდეგი სტრუქტურით:
// [
// { title: "JS", lessons: 20 },
// { title: "React", lessons: 35 },
// { title: "Node", lessons: 25 }
// ]
// Destructuring-ის გამოყენებით:
// პირველი კურსიდან აიღეთ title და lessons
// მეორე კურსიდან აიღეთ მხოლოდ title (rename გააკეთეთ secondCourseName)
// მესამე კურსიდან აიღეთ lessons და მიეცით default მნიშვნელობა 0
// ფუნქციამ უნდა დაბეჭდოს ყველა მიღებული მნიშვნელობა.

const courses = [
    { title: "JS", lessons: 20 },
    { title: "React", lessons: 35 },
    { title: "Node", lessons: 25 }
]

function display(lst) {
    const [
        { title, lessons },                     // First course
        { title: secondCourseName },            // Second course (Renamed)
        { lessons: thirdLessons = 0 }           // Third course (Default value)
    ] = lst;

    console.log("First : ", title, "Lessons: ", lessons);
    console.log("Name : ", secondCourseName);
    console.log("Lessons : ", thirdLessons);
}

display(courses);
