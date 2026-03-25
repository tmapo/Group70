// 3) მოცემულია ფუნქცია, აქიდან დაწერეთ კოდი, რომელიც მიღებული არგუმენტებით მიგვაღებინებს მსგავს შედეგს (უნდა დააბრუნოს ფუნქციამ):

//{
//     username: 'vashli123',
//     password: '12345678',
//     more: 'mwvane vashlis moyvaruli'
// };

function signup(email, password, more) {
    const obj = {
        email : email,
        password : password,
        more : more
    }
    return obj
}


console.log(signup('emaili', '12345678', 'mwvane_vashlis_moyvaruli'))