// 6.  შექმენი 5 ფაილი ისე, რომ ერთ სისტემად იმუშაონ: პირველ ფაილში შექმენი user ობიექტი სახელით და საწყისი ბალანსით, მეორე ფაილში დაწერე ფუნქციები deposit და withdraw, რომლებიც შეცვლიან user-ის ბალანსს, მესამე ფაილში შექმენი transfer ფუნქცია, რომელიც აირჩევს deposit-ს ან withdraw-ს ტიპის მიხედვით, მეოთხე ფაილში დაწერე ფუნქცია, რომელიც დააბრუნებს მომხმარებლის ანგარიშის ინფორმაციას (name და balance), მეხუთე ფაილში შექმენი log ფუნქცია, რომელიც დაბეჭდავს შეტყობინებას console-ში. ბოლოს შექმენი app.js ფაილი, სადაც დააიმპორტებ ყველა საჭირო ფუნქციას და ობიექტს და გამოიყენებ ისე, რომ მომხმარებლის ბალანსი შეიცვალოს სხვადასხვა ოპერაციებით და შედეგები დაბეჭდოს console-ში.

import { withdraw, deposit } from "./actions.js"
import { user } from "./user.js"
import { log } from "./log.js"

log(`Welcome to your account ${user.name}!`)
log("Check balance 1")
log("Withdraw 2")
log("Deposit 3")
const input = Number(prompt("Enter : "))

if (input === 1) {
    log(`$${user.balance}`)
}
else if (input === 2) {
    const input1 =  prompt("How much would you like to withdraw? : ")
    withdraw(user.balance , input1)
    log(`$${input1} withdrawed successfully!`)
    log("Balance : $" + user.balance)
}
else if (input === 3) {
    const input1 =  prompt("How much would you like to deposit? : ")
    deposit(user.balance , input1)
    log(`$${input1} deposited successfully!`)
    log("Balance : $" + user.balance)
}
