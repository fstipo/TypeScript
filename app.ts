function add(n1:number,n2:number,showResult:boolean,showText:string){
   const result = n1 + n2;
   if(showResult){
      console.log(showText + result);
   }else{
      return result;
   }
}

let number1:number = 11; // don't do this
// only if
let number3:number;
number3 = 18;
const number2 = 118;
const printResult = true;
let printText = "Result is: ";
printText = "0";
 add(number1,number2,printResult, printText);
