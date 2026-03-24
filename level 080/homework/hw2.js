// 2) მოცემულია ქულებისგან შემდგარი მასივი.
// დაწერეთ პროგრამა, რომელიც დაადგენს, რამდენი ქულა ეკუთვნის დაბალ, საშუალო და მაღალ კატეგორიას, სადაც:
// დაბალი — 40-ზე ნაკლები,
// საშუალო — 40-დან 69-ის ჩათვლით,
// მაღალი — 70 და მეტი.
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const allScores = [39 , 40 , 50 , 70]

const scores = []

allScores.forEach(num => {
    if ( num < 40) {
        scores.push("Low" , num)
    }
    else if ( num >= 40 && num < 70) {
        scores.push("Mid" , num)
    }
    else{
        scores.push("High" , num)
    }
})

console.log(scores)
