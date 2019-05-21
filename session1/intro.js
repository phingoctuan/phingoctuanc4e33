// let name = 1;
// name = 5;
// console.log("Hello", name);

// let x = Number(prompt("Nhập số thứ nhất"));
// let y = Number(prompt("Nhập số thứ 2")); 
// console.log(x + y);

// clear()
// for(let i =0; i<100; i++){
//     fd(100)
//     rt(90)
//     fd(100)
//     rt(90)
//     fd(100)
//     rt(90)
//     fd(100)
//     rt(90)
    
//     rt(30)
// }


function caculatorAreaCircle(){
    const pi = 3.14;
    var radius = document.getElementById("circleradius").value;
    var area = pi * (radius*radius);

    document.getElementById("circleArea").innerHTML = "Dien tich hinh tron nhu nay ne: "+area;
    // $("#circleArea").val("radius");
}