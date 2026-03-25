// 3) შექმენი ფუნქცია, რომელიც პარამეტრად იღებს ობიექტს:
// {
//   price: 100,
//   discount: 20
// }
// დესტრუქტურინგით გამოთვალე საბოლოო ფასი (price - discount).

const obj = {
  price: 100,
  discount: 20
}


function finalPrice(obj){
    const {price , discount} = obj
    return price - discount
}


console.log(finalPrice(obj))