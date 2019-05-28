// let n=Number(prompt("Nhập vào năm sinh: "));
// let age = 2019-n;

// if (age < 10){
//     console.log("Baby");
// }
// else if(age < 18){
//    console.log("Teenager"); 
// }
// else{
//     console.log("Adult");
// }

// let n = Math.floor(Math.random() * 101);
// console.log(n);
// if(0<n&&n<=30){
//     console.log("Sunny");
// }
// else if (n <= 70){
//     console.log("Rainy");
// }
// else {
//     console.log("Cloudy");
// }
// let a= prompt("Nhập vào a: ");
// let b= prompt("Nhập vào b: ");
// let c= prompt("Nhập vào c: ");

// const delta = (b*b) - (4*a*c);
// if(delta < 0){
//     console.log("Phương trình vô nghiệm");
// }
// else if(delta===0){
//     console.log(`Phương trình có nghiệm kép ${x}`); //backticks
    
// }
// else{
//     let x1 = (-b-delta**0.5)/(2*a);
//     let x2 = (-b+delta**0.5)/(2*a);
//     console.log("Phương trình có 2 nghiệm phân biệt");
//     console.log(`x1 = ${x1}`);
//     console.log(`x2 = ${x2}`);
// }

// a = prompt("Nhập vào số a: ");
 
// // Chuyển sang kiểu number
// a = parseInt(a);
// for(i=1; i<=100; i++){
//     if (a % 2 == 0){
//         console.log("a là số chẵn");
// }

// }

//Cho người dùng nhập vào username nếu đúng cho nhập vào password -> Đúng -> Welcome
//                                                                -> Sai -> Password Wrong
//                                                       sai -> not found

const username = "c4e33";
const password = "codethechange";
let usernameLogin = prompt("Username?")
if(usernameLogin === username){
    let passwordLogin = prompt("Password?");
    if(passwordLogin === password) {
        console.log(`Welcome ${usernameLogin}`);
    }else{
        console.log("Wrong password");
    }
}
    else{
        console.log("User not found");
    }
