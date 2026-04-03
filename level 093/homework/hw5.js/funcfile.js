// 5 შექმენი ფუნქცია რომელიც მიიღებს სტუდენტის ქულას და დააბრუნებს შეფასებას 90 ან მეტი არის A 70 ან მეტი არის B 50 ან მეტი არის C 50-ზე ნაკლები არის F გამოიყენე if else if else ფუნქცია უნდა იყოს მოდულში ექსპორტირებული და იმპორტირებული და გამოყენებული სხვა ფაილში

export const gradecalc = (grade) => {
    if (grade >= 90) {
        return "A"
    }
    else if (grade >= 70) {
        return "B"
    }
    else if (grade >= 50) {
        return "C"
    }
    else if (grade < 50) {
        return "f"
    }
}