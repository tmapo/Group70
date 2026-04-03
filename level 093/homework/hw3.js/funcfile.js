// 3 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს ყველა იმ წყვილს რომლის ჯამი არის 27 გამოიყენე nested for loop if და შეინახე შედეგი ახალ array-ში ფუნქცია უნდა იყოს მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული

export const total27 = (arr) => {
    const mydata = {}
    let datacounter = 0
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] + arr[k] === 27 ) {
                mydata[`acc${datacounter}`] = arr[i]  + " (on index " + i + " ) + " + arr[k] +  " (on index " + k + ") = 27"
                datacounter++
            }
        }
    }
    return mydata
}
