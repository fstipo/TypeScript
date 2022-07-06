
const person ={
   name:"Franko",
   age:44,
   hobbies:["music","basketball"]
}

// let favoriteActivities:string[];
let favoriteActivities:any[];
favoriteActivities=["dance",true]

for(const hobby of person.hobbies){
   console.log(hobby.length);
}