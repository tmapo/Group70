// 5) შექმენი ობიექტი:
// const profile = {
//   username: "kocho",
//   followers: 120,
//   verified: false
// };
// შექმენი მისი ასლი spread-ით.
// შემდეგ შეცვალე ასლში followers → 500.
// შეამოწმე — ორიგინალი ობიექტი შეიცვალა თუ არა?

const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

const newprofile = {
    ...profile,
    followers: 500
}
//ორიგინალი ობიექტი არ შეცვლილა.

console.log(profile)
console.log(newprofile)