// 8. შექმენი ფაილი stringTools.js. დაწერე ორი ფუნქცია. პირველი ფუნქცია reverse(text) უნდა აბრუნებდეს ტექსტს უკუღმა და იყოს named export. მეორე ფუნქცია countLetters(text) უნდა ითვლიდეს ტექსტში რამდენი ასოა for loop-ის გამოყენებით და იყოს default export. შემდეგ main.js-ში დააიმპორტე ორივე ფუნქცია და გამოიტანე შედეგები console.log-ში.

export const reverse = (text) => {
    let reversed = ""
    for ( let i = 1; i < text.length + 1; i++ ) {
        reversed += text[text.length -i]
    }
    return reversed
}

const countLetters = (text) => {
    let total = 0
    for ( let i = 0; i < text.length ; i++ ) {
        total ++
    }
    return total
}

export default countLetters

