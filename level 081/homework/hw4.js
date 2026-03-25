// 4) მოცემულია თანამშრომლების სია სამუშაო საათებით. დაწერეთ პროგრამა, რომელიც დაადგენს რამდენმა თანამშრომელმა იმუშავა 40 ან მეტი საათი, რამდენმა ნაკლები, ასევე გამოითვლის ყველა თანამშრომლის ნამუშევარი საათების ჯამსა და საშუალოს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const workers = [
    {
        name : "Elliot_Alderson", 
        workTime : 56  //Just a tech
    },
    {
        name : "Dexter_Morgan",
        workTime : 113  //The Bay Harbour Butcher
    },
    {
        name : "Walter_White",
        workTime : 10   //busy making meth
    },
    {
        name : "Little_Red_Riding_Hood",
        workTime : 0 //unemployed
    },
    {
        name : "Snow_White", //walters daughter
        workTime : 82
    }
]

const obj = { 
    Overworked : 0 ,
    Underworked : 0,
    totalworked : 0
}

const filtered = workers.reduce((limit , workerscore) => {
    if (workerscore.workTime >= limit) {
        obj.Overworked ++
        obj.totalworked += workerscore.workTime
    }
    else {
        obj.Underworked ++
        obj.totalworked += workerscore.workTime
    }
    return limit
} , 40)

console.log(obj)

