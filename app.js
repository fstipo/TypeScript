function add(n1, n2, showResult, showText) {
    var sum = n1 + n2;
    if (showResult) {
        console.log(showText + sum);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 11;
var number2 = 118;
var printResult = true;
var printText = "Sum of numbers is: ";
var result = add(number1, number2, printResult, printText);
