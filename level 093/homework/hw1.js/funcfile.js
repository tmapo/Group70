// 1 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ყველაზე პატარა რიცხვი და ყველაზე დიდი რიცხვი გამოიყენე for loop და if else ფუნქცია უნდა იყოს ცალკე ფაილში და ექსპორტირებული და მეორე ფაილში უნდა მოხდეს იმპორტი და გამოყენება

export const minmax = (arr) => {
    let min = arr[0]
    let max = arr[0]
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] < min) { 
            min = arr[i]
        }
        else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return [min , max]
}