//Declaring a variable
// keyword identifier/Variable = value
var firstName = "Bernice";
let lastName ="Quansah";
let age = 20;
let isNotMarried = false;
let children = ["Bernice", "Eunice", "Princess"];
let other = {
    favouriteColor: "Black",
    FavouriteGame: "Ampe",
    favouriteFruit: "Apple",
};
const fullName = firstName + "" + lastName; // concantation
const myself = ` My name is ${firstName} ${lastName}`;
console.log(myself);

//STRINGS
let sentence = "This is a profile of Bernice Quansah"
console.log(sentence.length);
console.log(sentence.split("Bernice"));
console.log(sentence.replace("Bernice", "Agyeiwaa"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("T"))
console.log(sentence.endsWith("Quansah"));
console.log(sentence.includes("Married"));

//ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days.length);
// days.push("Saturday");
// console.log(days);
// console.log(days.pop());
// days.unshift("Sunday");
// console.log(days);
// console.log(days.shift());
// console.log(days.indexOf("Friday"));
// console.log(days[3]);
// days[3] = "Saturday";
// console.log(days);

//OBJECT
let person = {
    firstName: "Bernice",
    lastName: "Quansah",
    age: 20,
};
console.log(person. firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));