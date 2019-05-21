
function caculatorAreaCircle(){
    const pi = 3.14;
    var radius = document.getElementById("circleradius").value;
    var area = pi * (radius*radius);

    document.getElementById("circleArea").innerHTML = "This is area of circle: "+area;
    // $("#circleArea").val("radius");
}