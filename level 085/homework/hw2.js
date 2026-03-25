// 2) მოცემულია ობიექტი:
// const employee = {
// id: 101,
// name: "Luka",
// position: "Developer",
// salary: 3000,
// contact: {
// email: "luka@gmail.com",
// phone: "555-123-456"
// }
// }
// Nested destructuring-ის გამოყენებით:
// name გადაარქვით employeeName
// salary გადაარქვით monthlySalary
// contact-იდან პირდაპირ აიღეთ email (rename გააკეთეთ workEmail)
// phone-ს მიეცით default მნიშვნელობა "Not Provided"
// დანარჩენი ზედა დონის მონაცემები შეინახეთ restEmployee ობიექტში

const employee = {
    id: 101,
    name: "Luka",
    position: "Developer",
    salary: 3000,
    contact: {
        email: "luka@gmail.com",
    }
}
const { 
    name: employeeName, 
    salary: monthlySalary, 
    contact: { 
        email: workEmail, 
        phone = "Not Provided" 
    }, 
    ...restEmployee 
} = employee;


console.log(phone);
