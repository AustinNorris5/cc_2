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

//Task 3: Working with Objects
let employee = {name: "John Doe", age: 24, department: "Sales", isActive: true};

employee.department = "Finance";
employee.position = "Manager";

console.log("Updated Employee Record:", employee);

//Task 4: Array of Objects
let customers = [
    {name: "Jalen Hurts", email: "JalenHurts@gmail.com", purchaseAmount: 50},
    {name: "Jayden Daniels", email: "JaydenDaniels@gmail.com", purchaseAmount: 75},
    {name: "Josh Allen", email: "JoshAllen@gmail.com", purchaseAmount: 20}
];

customers.push({name: "James Cook", email: "JamesCook@gmail.com", purchaseAmount: 100});

console.log("Customer List:", customers);

//Task 5: Object Methods
let order = {
    orderId: 123, 
    customerName: "AJ Brown",
    amount: 200,
    calculateTax: function() {
        return this.amount * 0.10;
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax());
