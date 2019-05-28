// // 1. What is Boolean? Write down 3 different expression that results a Boolean type (i.e. 5 == 6)
// Boolean is a data type that only has 2 values true or false. 
// e.g. (10 > 9)
// ("")
// (x = -0) 

// // 2. What is a flow chart? Draw flow chart for the following code snippet: 
// (you can draw on a paper, take a picture of it)
// if name == “Huy be":
//     print(“Handsome")
// else if name == “Huy big":
//     even_more_handsome = True
// else:
//     webbrowser.open(“https://www.youtube.com/watch?v=04854XqcfCY”)

// ANSWER: A flowchart is a visual representation of a process in which each step in the process 
// is represented by a different shape and contains a short description of the process step.



// // 3. What is nested conditionals? Write a piece of code that uses nested conditionals

// Nested conditionals is when if() is put inside another if()
// e.g.:
// let usn = prompt("Enter your username: ")
// if (usn === "C4E33"){ 
//     let pw = prompt("Enter your passwords: ")
//     if (pw === "codethechange"){
//         console.log("Welcome!")
//     }
//     else{
//         console.log("Wrong Passwords")
//     }
//     }
// else{ 
//     console.log("Not found!")
// }

// 4. 
// clear()
// for (let i=0; i<4; i++){
// 	color("red")
//     rt(60)
//     fd(50)
//     rt(60)
//     fd(50)
//     rt(120)
//     fd(50)
//     rt(60)
//     fd(50)
//     rt(150)
// }

// 5.
// clear()
// color("blue")
//   rt(30)
//   fd(70)
//   rt(120)
//   fd(70)
  
// lt(150)
// color("red")
// for (i=0; i<4; i++){
//   fd(70)
//   lt(90)
// }
  
// rt(18)
// color("blue")
// for (i=0; i<5; i++){
//   fd(70)
//   lt(72)
// }

// rt(12)
// color("red")
// for (i=0; i<6; i++){
//   fd(70)
//   lt(60)
// }

// 6. 
let h = prompt("Enter your height (cm): ")
let w = prompt("Enter your weight (kg): ")
let hm = Number (h/100)
let bmi = Number (w/(hm*hm))
if (bmi<16){
    console.log("Severely underweight")
}
else if (bmi<18.5){
    console.log("Underweight")
}
else if (bmi<25){
    console.log("Normal")
}
else if (bmi<30){
    console.log("Overweight")
}
else {
    console.log("Obese")
}

// 7. 
// let n = prompt("Enter n: ")
// let factor = 1
// for (i=1; i<=n; i++){
//     factor = factor * i
// }
// console.log("Factorial of n is", factor)