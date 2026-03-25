// 4) მუშაობს თუ არა მოცემული კოდი? ახსენით რატომ და გამოასწორეთ შეცდომა, რომ შესაბამისი შედეგი მივიღოთ

// const numbers = [1, 2, 3, 4, 5];
// const [first, ...middle, last] = numbers;
// console.log(middle);

//კოდი არ მუშაობს რადგან destructioning-ში spread ოპერატორი ყოველთვის ბოლოში უნდა იყოს. მსგავსი შედეგი შეგვიძლია ასე მივიღოთ:

const numbers = [1, 2, 3, 4, 5];
numbers.shift()
numbers.pop()

console.log(numbers);