// 1) მოცემულია წიგნების ავტორების მასივი. დაწერეთ პროგრამა, რომელიც დააჯგუფებს ავტორებს და დაითვლის რამდენი წიგნი აქვს თითოეულ ავტორს. შედეგი შეინახეთ ობიექტში. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const lst = [
    {
        name : "Shakespeare" , 
        count : 38
    },
    {
        name : "J.K.Rowling",
        count : 28
    },
    {
        name : "Dostoevsky",
        count : 33
    }
]

const total = lst.reduce(( num1 , num2)  => {
    return num1 + num2.count
}, 0)

const obj = {
    writers : "Shakespeare , J.K.Rowliing , Dostoevsky",
    totalBooks : total
}

console.log(obj)