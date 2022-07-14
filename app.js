// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR= 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Franko",
    age: 44,
    hobbies: ["music", "basketball"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("You are ADMIN");
}
else {
    console.log("You are not ADMIN");
}
