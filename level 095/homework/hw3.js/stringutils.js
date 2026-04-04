// 2.შექმენი ფაილი stringUtils.js, სადაც დაწერ ფუნქციებს capitalize(str) და reverse(str), გააერთიანე ერთ ობიექტში stringUtils და გააკეთე export, შემდეგ სხვა ფაილში გამოიყენე ეს ფუნქციები.

const uppercase = (str) => {
    const caps = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" //26 each.  52 total
    const symbols = " ,.!?/():;'[]{}-+=_@#$%^&*0123456789"
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < caps.length; k++ ){
            if (str[i] === caps[k]){
                if (k <= 26) [
                    newstr += caps[k+26]
                ]
                else {
                    newstr += str[i]
                }
            }
        }
        for (let k = 0; k < symbols.length; k++) {
            if (str[i] === symbols[k]) {
                newstr += str[i]
            }
        }
    }
    return newstr
}


const reverse = (str) => {
    let reversed = ""
    for (let i = 0; i < str.length; i++) {
        reversed += str[str.length -i]
    }
    return reversed
}

export const stringUtils = {
    capslock : uppercase,
    reversedstr : reverse
}

