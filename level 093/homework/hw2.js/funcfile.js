// 2 შექმენი ფუნქცია რომელიც მიიღებს array-ს და target რიცხვს ფუნქციამ უნდა მოძებნოს target array-ში while loop-ის გამოყენებით თუ იპოვა დააბრუნოს index თუ ვერ იპოვა დააბრუნოს ტექსტი ვერ მოიძებნა ფუნქცია უნდა იყოს ცალკე მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული

export const indexfinder = (arr , target) => {
    let targetfound = 0
    let index = 0
    let i = 0
    while (i < arr.length) {
        if (arr[i] === target) {
            targetfound ++
            index = i
            break
        }
        i++
    }
    if (targetfound != 0) {
        return index
    }
    else {
        return "Target not found."
    }
}