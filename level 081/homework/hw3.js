// 3) მოცემულია თამაშის მოთამაშეების სია, სადაც თითოეულ მოთამაშეს აქვს სახელი და მოგებული ქულები. დაწერეთ პროგრამა, რომელიც იპოვის მოთამაშეს, რომელსაც ყველაზე ნაკლები ქულა აქვს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const scores = [
    {
        name : "Apolon",
        score : 31092331
    },
    {
        name : "homelander",
        score :  31092330
    },
    {
        name : "Victor",
        score : -9999999  //get a load of this guy
    },
    {
        name : "Little_Timmy",
        score : 10000000
    }
]

const Total_loser = scores.reduce((worst , player) => {
    if (worst.score > player.score ) {
        worst = player
    }
    return worst
})

console.log(Total_loser.name + " lost with a total score of " + Total_loser.score + ". What a shame LOL")