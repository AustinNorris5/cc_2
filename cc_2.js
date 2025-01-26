//Task 1: Working with Arrays
let products = ["Shirt", "Pants", "Shoes", "Hat", "Glasses"];

products.push("Socks");

products.pop();

console.log("Updated Product List", products);

//Task 2: Accessing and Modifying Arrays
let scores = [10,20,30,40,50];

scores.splice(1, 1, 25);

let total = scores.reduce((sum, scores) => sum + scores, 0);
let average = total / scores.length;

console.log("Updated Scores:", scores);
console.log("Average Scores:", average);