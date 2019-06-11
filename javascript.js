// function getLink() {
//     let a = $("#googleLink").attr("href");
//     let b = document.getElementById("googleLink").getAttribute("href");
//     var x = document.getElementById("googleLink").getAttribute("href");
//     // document.getElementById('hrefText').innerHTML = x;
//     $("input:text").val(a);
// }

//get data from api.
function getDataAPI() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        data.forEach(element => {
            $("#myList").append("<li>"+element.employee_name+"</li>");
        });
    }

    // Send request
    request.send()
}