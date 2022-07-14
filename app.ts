// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR= 2;


enum Role {"ADMIN" ="ADMIN" ,"READ_ONLY"=200,"AUTHOR"="AUTHOR"}

const person ={
   name:"Franko",
   age:44,
   hobbies:["music","basketball"],
   role:Role.ADMIN
}

if(person.role === Role.ADMIN){
   console.log("You are ADMIN");
}else{
   console.log("You are not ADMIN");
}