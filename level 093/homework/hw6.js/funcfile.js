// 6 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ლუწი რიცხვების რაოდენობა კენტი რიცხვების რაოდენობა და ყველა რიცხვის ჯამი გამოიყენე for loop და if else ფუნქცია უნდა იყოს ცალკე მოდულში და გამოყენებული იყოს იმპორტით სხვა ფაილში


export const numcalc = (arr) => {
    let obj = {
        even : 0,
        odd : 0,
        total : 0
    }
    for (let i = 0; i < arr.length; i++ ) { 
        if (arr[i] % 2 === 0) {
            obj.even ++
            obj.total += arr[i]
        }
        else {
            obj.odd ++
            obj.total += arr[i]
        }
    }
    return obj
}