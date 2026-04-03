// 4 შექმენი ფუნქცია რომელიც მიიღებს ტექსტს და დააბრუნებს იგივე ტექსტს მაგრამ ციფრების გარეშე გამოიყენე for loop if და continue ფუნქცია უნდა იყოს ცალკე ფაილში და გამოყენებული იყოს იმპორტის საშუალებით სხვა ფაილში

export const nonum = (text) => {
    let noNumText = ""
    for (let i = 0; i < text.length; i++) {
        if ("0123456789".includes(text[i])) {
            continue
        }
        else {
            noNumText += text[i]
        }
    }
    return noNumText
}