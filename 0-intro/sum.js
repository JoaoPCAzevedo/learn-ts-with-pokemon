var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    console.log("Hello");
    return num1 + num2;
}
console.log(add(+input1.value, parseInt(input2.value)));
