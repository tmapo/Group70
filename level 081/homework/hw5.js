// 5) მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა იწყება ხმოვანი ასოთი (a, e, i, o, u — ინგლისურად ან ა, ე, ი, ო, უ — ქართულად). ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "i really like these letters with vowels. like apple , avocado , atlantic ocean , astronomy and more"
const splitted = text.split(" ")

const reduced = splitted.reduce((counter , fletter ) => {
    
    if ( ["a", "e", "i", "o", "u"].includes(fletter[0]) ) {
        counter ++
    }
    return counter

}, 0 )


console.log(reduced + " Words start with vowels.")