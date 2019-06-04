window.onload = ()=>{

let x = Number(Math.floor((Math.random() * 10)));
let y = Number(Math.floor((Math.random() * 10)));
let arrOp = ['+','-', '*','/'];

let opIndex = Math.floor(Math.random()*arrOp.length);
let op = arrOp[opIndex];
let errorArr = [1, 0, -1];
let erroIndex = Math.floor(Math.random()*errorArr.length);
let error = 0
let result = calc(x, y, op)

let displayResult = result + error;
console.log(`${x} ${op} ${y} = ${displayResult}`)

let answer = prompt("(y/n").toLowerCase();
let THONGBAo = checkAnswer(error, answer)

console.log(THONGBAo)
}

