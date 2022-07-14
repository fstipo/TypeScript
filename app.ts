
const person:{
   name:string;
   age:number;
   hobbies:string[];
   role:[number,string];
} ={
   name:"Franko",
   age:44,
   hobbies:["music","basketball"],
   role:[2,"author"]
}

// Warning for tuple -> push is working
person.role.push("name");
// person.role[1]=100;
// person.role=[2,"string",2]