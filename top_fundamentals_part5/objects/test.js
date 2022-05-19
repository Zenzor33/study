// // Literals, properties, square brackets
// let user = {
//   name: "john",
//   age: 30,
//   "likes birds": true,
// };

// let key = "likes birds";

// console.log(user.age);
// console.log(user.name);
// console.log(user[key]);

// // COMPUTED PROPERTIES

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// bag[fruit] = 5;
// console.log(bag);

// PROPERTY VALUE SHORTHAND

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age, // same as age: age
//     // ...
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// Property existance test: "in" operator
// let user = { name: "John", age: 30 };

// alert("age" in user); // true, user.age exists
// alert("blabla" in user); // false, user.blabla doesn't exist

// // The "for..in" loop
// // used to walk over all keys of an object
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // keys
//   console.log(key); // name, age, isAdmin
//   // values for the keys
//   console.log(user[key]); // John, 30, true
// }

// Orders
// Objects are “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

let codesCheat = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codesCheat) {
  console.log(+code); // 49, 41, 44, 1
}
