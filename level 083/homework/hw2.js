// 2) მოცემულია ობიექტი:
// {
//   username: "admin",
//   password: "1234",
//   role: "user"
// }
// დესტრუქტურინგის გამოყენებით:
// username გადაარქვი user
// role-ს გაუწერე default მნიშვნელობა "guest" (თუ არ არსებობს)

const obj = {
  username: "admin",
  password: "1234",
  role: "user"
}

const {username : user , password , role} = obj

console.log(user)