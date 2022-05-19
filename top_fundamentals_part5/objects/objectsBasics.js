// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log("Meow!");
//   },
// };

// // Put your code here
// //  - Store the value of the name property inside the catName variable, using bracket notation.
// const catName = cat["name"];
// // - Run the greeting() method using dot notation (it will log the greeting to the browser's console).
// cat.greeting();
// // - Update the color property value to black.
// cat["color"] = "black";

// // Don't edit the code below here

// let para1 = document.createElement("p");
// let para2 = document.createElement("p");

// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;

// section.appendChild(para1);
// section.appendChild(para2);

// let bandInfo;

// Put your code here

// const band = {
//   name: "Disturbed",
//   nationality: "The USA",
//   genre: "rock",
//   members: 6,
//   formed: 1994,
//   split: false,
//   albums: [
//     {
//       name: "Immortalized",
//       released: 2015,
//     },
//     {
//       name: "Live at Red Rocks",
//       released: 2016,
//     },
//   ],
// };

// function isTogether() {
//   if (band.split) {
//     return "split";
//   } else {
//     return "together";
//   }
// }

// bandInfo = `${band.name} of ${band.nationality} creates ${
//   band.genre
// } music. Formed in ${band.formed}, they have ${
//   band.members
// } members. They are currently ${isTogether()}. Their first album ${
//   band.albums[0].name
// } was released in ${band.albums[0].released}`;

// // Don't edit the code below here

// let para1 = document.createElement("p");
// para1.textContent = bandInfo;
// section.appendChild(para1);

// Problem 3

/* rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser's console, but in a way that will work across any cat object of the same structure, regardless of its name or breed. */

// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// /* When you are done, write your own object called cat2, which has the same structure, exactly the same greeting() method, but a different name, breed, and color.*/

// const cat2 = {
//   name: "Banana",
//   breed: "Mix",
//   color: "Black",
//   greeting: function () {
//     console.log(`Hello, said ${this.name} the ${this.breed}.`);
//   },
// };

// Problem 4

// Improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method.

function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

const cat = new Cat("Bertie", "Cymric");

const cat2 = new Cat("Elfie", "Aphrodite Giant");

greeting(cat);
greeting(cat2);
