function add(n1, n2, showResult, showText) {
    var result = n1 + n2;
    if (showResult) {
        console.log(showText + result);
    }
    else {
        return result;
    }
}
var number1 = 11;
var number2 = 118;
var printResult = true;
var printText = "Result is: ";
add(number1, number2, printResult, printText);
