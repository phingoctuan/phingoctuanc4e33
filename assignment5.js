//Review
//Why should we use functions at all? 
//The first reason is reusability. Once function is defined, it can be used over and over and over again. 
//You can invoke the same funtion many times. In your program, which save your work.
//The second reason is abstraction. In oder to use a particular function you need to know the following things:
// The name of the function;
// What the function does;
// What arguments you must give to the function; and
// What kind of result the function returns.
//But notice: If you just want to use the function in your program, you don't have to know how it works inside! You don't have to understand anything about what goes on inside the function.

//How to define/declare a function? Let namefunction = (parameter1, parameter2, parameter3) => {code to be excuted}

//How to call/ use a function? - namefunction(value/function)

//What is return, why and how do we use it? - When JavaScript reaches a return statement, the function will stop executing.
//Functions often compute a return value. The return value is "returned" backk to the "caller".

//Do we have to use return in every function?-No

// 



//Exercise 1: Write a function that prints out “Hello world” 3 times (note: no arguments, no return)

let hello = () => {
    for (i = 0; i < 3; i++){
        console.log("Hello world");
    }
}
    hello;

//Exercise 2: Write a function that takes 2 numbers as arguments and print out sum of them (note: has arguments, no return)

let sum = (x, y) => {
    let result = x + y;
    console.log(result);
}

sum(90, 100);

//Exercise 3: Write a Python function that draws a square, named draw_square, takes 2 arguments: length and color, where length is the length of its side and color is the color of its bound (line color)
// let drawSquare = (lenght, clr) =>
// {
//     color (clr);
//     for(i=0; i<4; i++)
//     {
//         fd(length);
//         rt(90);
//     }
// }

// drawSquare(150, "green");

//Exercise 4:
// for (let i = 0; i < 30; i++){
//     drawSquare( i * 5, 'red');
// lt(17);
// penup();
//     forward(i * 2);
//     pendow()

// }
 // => a cylone of square

//Execerise 5:
// let draw_star = (length) =>

// {
//   rt(18);
//   for(i=0;i<5;i++)
//   {
//     fd(length);
//     rt(144);
//   }
// }
// draw_star(200);

//Exercise 6: 
let remove_dollar_sign = (s) => {
    newStr = s.replace(/\$/g, ""); //Using \ to read special characters
    return newStr;
}

//Exrcise 7: 
string_with_no_dollars = remove_dollar_sign("$80% of $life is to show $up")
if (string_with_no_dollars == "80% of life is to show up") {
    console.log("Your function is correct");
} else{
    console.log("Oops, there's a bug");
}
//Exercise 8: 
let get_even_list = () =>  {
    let List = [];
    for (i = 0; i < length; i++){
        if(1[i] % 2 == 0) {
            List.push([i]);
        }
    }
    return List;

}

//Exercise 9:
even_list = get_even_list([1, 2, 5, 9, -10, 6])
console.log(even_list);
if (even_list == [2, -10, 6]) {
    console.log("Your function is correct");
} else {
    console.log("Oops, bugs detected");
}

//Exercise 10: 
let is_inside = ([x,y],[ox,oy,a,b]) =>
{
    if(x>=ox && y>=oy && x<=(ox+a) && y<=(oy+b))
    {
       return true;
    } else{
      return false;
    }
}
console.log(is_inside([100, 120], [140, 60, 100, 200])); //return False
console.log(is_inside([200, 60], [140, 60, 100, 200]));   //return True


//Exercise 11:
let x=is_inside([150,80],[140,50,60,90])
if(x==true)
{
    console.log("Your function is correct");
}
else{
    console.log("Ooops, bugs detected");
}