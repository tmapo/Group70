// 5) შექმენი რიცხვების მასივი 4, 8, 12, 16, 20.
// თითოეული რიცხვი გაყავი 2-ზე,
// იპოვე მიღებული რიცხვების საშუალო არითმეტიკული,
// დაამრგვალე შედეგი მთელ რიცხვამდე
// და დაბეჭდე საბოლოო პასუხი.


const nums = [4, 8, 12, 16, 20]

const nums1 = nums.map(num => {
    return num / 2
})

const avg = nums1.reduce((num1 , num2) => {
    return (num1 + num2)
})  / nums1.length

const rounded = Math.round(avg)

console.log(rounded)