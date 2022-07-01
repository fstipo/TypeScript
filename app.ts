function add(n1:number,n2:number,showResult:boolean,showText){
   const sum = n1 + n2;
   if(showResult){
      console.log(showText+ sum);
   }else{
      return n1 + n2;
   }
}

const number1 = 11;
const number2 = 118;
const printResult = true;
const printText = "Sum of numbers is: ";
const result = add(number1,number2,printResult, printText);
