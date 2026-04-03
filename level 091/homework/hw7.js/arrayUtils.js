// 7 . შექმენი ფაილი arrayUtils.js. დაწერე ფუნქცია getEvenNumbers(arr) რომელიც მიიღებს რიცხვების array-ს, for loop-ის გამოყენებით იპოვის ყველა ლუწ რიცხვს და დააბრუნებს ახალ array-ს ამ რიცხვებით. ეს ფუნქცია გააკეთე named export. შემდეგ app.js-ში დააიმპორტე ფუნქცია და გამოიტანე შედეგი console.log-ში.

export const getEvenNumbers = (arr) => {
    const evenonly = []
    for (let i = 0; i < arr.length; i++) {
        if  (arr[i] % 2 === 0) {
            evenonly.push(arr[i])
        }
    }
    return evenonly
}

