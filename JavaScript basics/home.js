console.log("hello world");


// alert("Amar"); (To comment)

// Variables
var a = "Amar";
console.log(a);

var num = 25;
console.log(num);

// Manipulate DOM with JavaScript
// var age = prompt("What is your age");
// document.getElementById("sometext").innerHTML = "My Age is " + age;

// Numbers in JavaScript
var num1 = 9.88;
console.log(num1 * 5);

// Increment number
num1 = num1 + 1;
num1++;
num1++;
console.log(num1);

// Decrement num
num2 = 5;
num2 = num2 - 1;
num2--;
console.log(num2);

// Divide /, multiply *, remainder %, etc...
console.log(num2 % 2);

// Increment/Decrement by any Number
num2 += 10;
console.log(num2)

// Objects
var marks = {
    amar: 78,
    mandal: 98,
    rahul: "xyz",
};
console.log(marks);
console.log(marks.rahul);
marks.mandal++;
console.log(marks.mandal)

// OOps concept
let student = {
    first: "amar",
    last: "mandal",
    age: 22,
    sudentInfo: function () {
        return this.first + "\n" + this.age + " this is oops";
    }
};
console.log(student.sudentInfo())

// Boolean datatype
var a = true;
var b = false;
console.log(a, b)

// undefined - variable is not defined
var und;
console.log(und)

// to check datatype
console.log(typeof (a), typeof (num1))

/*
At a very high level, there are two types of data types:
1. Premitive data type: undefined, null, str, number, boolean, symbol
2. Reference data type: arrays, objects
*/

// arrays
var arr = [1, 2, 6, 89, 4, "amar"];
console.log(arr[1], arr.length, arr[arr.length - 1]);
let fruits = ["apple", "banana", "pineapples", "orange"];
fruits = new Array("apple", "banana", "pineapples", "orange");
console.log(fruits[1]);
fruits[0] = "pears"; console.log(fruits);  // assigning values within array
// array common methods
console.log("to string", fruits.toString()); // convert into one string
console.log(fruits.join(" - ")) // joins within array
console.log(
    fruits, fruits.pop(), fruits
) // removes the last index of array
console.log(fruits.push("blackberries"), fruits) // appends data to an array
console.log(fruits.shift(), fruits) // removes first element in an array
console.log(fruits.unshift("newFruit"), fruits)  // adds first elements in an array
let vegetables = ["tomato", "spinach", "broccli"];
let allGroceries = fruits.concat(vegetables); // concatinating arrays
console.log(allGroceries)
console.log(allGroceries.sort()); // Sorted alphabetically
let someNumbers = [1, 3.4, 67, 8.7, 45, 45, 6.7];
console.log(someNumbers.sort(function (a, b) { return a - b })); // Sorted in ascending order
console.log(someNumbers.sort(function (a, b) { return b - a })); // Sorted in descending order


// Strings in JavaScript
let fruit = "apple";
let moreFruits = "banana\napple";
console.log(moreFruits);

// length, slice and index of that string
console.log(fruit.length)
console.log(fruit.indexOf("a"))
console.log(fruit.slice(2, 4))

// Find and replace
console.log(fruit.replace("pp", 77))
// UPPER and lower case
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
// Splitting string
console.log(fruit.split(""))


// function
// DRY - Donot Repeat Yourself
function avg(num1, num2) {
    console.log((num1 + num2) / 2);
    c = num1 + num2;
    return c;
};
c = avg(num1 + 1, num2 + 3);
console.log(c)

// Practice - Calculation of CGPA
var total = null;
function cgpa() {
    var sgpi = prompt("Enter SGPI");
    total += spgi
};


// Conditionals
// && AND
// || OR
var age = 44;
if (age < 18) {
    console.log("You are not Adult");
}
else if ((18 < age) && (age < 21)) {
    console.log("You are not a Adult but cannot drink");
}
else {
    console.log("You can drink");
};


// for Loops
var arr = [1, 3.5, 6, 9.5];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// push an empty array
let emptyArray = [];
for (let n = 0; n < 10; n++) {
    emptyArray.push(n);
};
console.log(emptyArray);


// Iterating over array using "forEach" method
arr.forEach(function (anyName) {
    console.log(anyName);
})

console.log("--------------------")

// While loop
// "let" is used for better memory managment
// its scope is limited to functions when defined in a function
let p = 0;
const q = 1;
// Wont work because value remains constant
// b = b+1; 
while (p < arr.length) {
    console.log(arr[p]);
    p++;
}

// do while -  Runs for the first time then checks the condition
p = 0
do {
    console.log(arr[p]);
    p++;
} while (p < arr.length);

// Switch Statement
switch (6) {
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log(text)


// Dates
let d = new Date()
console.log(d)
console.log(d.getFullYear())
console.log(d.getMinutes())
console.log(d.getHours())
console.log(d.getTime())


// DOM Manipulation
console.log(document);
// getElementById - access using ID
let elem = document.getElementById("click");
console.log(elem)
console.log(document.getElementById("click").style.border = "2px solid blue");
// getElementByClass - access using Class
let elemClass = document.getElementsByClassName("container");
console.log(elemClass)
// elemClass[0].style.background = "yellow";
// Adding Class
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text")
// Removing Class
// elemClass.classList.remove("text")
// innerHTML and innerText
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
// getElementsByTagName
let tn = document.getElementsByTagName("button")
tn = document.getElementsByTagName("div")
console.log(tn)
// Create and element
createdElement = document.createElement("p")
createdElement.innerText = "This is new text created inside Div Tag"
tn[0].appendChild(createdElement)
// Replacing a newly created element
createdElement2 = document.createElement("b")
createdElement2.innerText = "This is bold tag which is replaced with createdElement"
tn[0].replaceChild(createdElement2, createdElement)
// Selecting using Query
let sel = document.querySelector(".container")
console.log(sel)
sel = document.querySelectorAll(".container")
console.log(sel)

// Events in JavaScript
// clicked.addEventListener("click", function(){
//     console.log("mouse clicked")
// })
// abc.addEventListener("mouseover", function(){
//     console.log("mouse on container")
// })
// abc.addEventListener("mouseout", function(){
//     console.log("mouse out of container")
// })
let pretext = document.querySelectorAll(".container")[0].innerText
abc.addEventListener("mouseup", function(){
    document.querySelectorAll(".container")[0].innerText = pretext
    console.log("mouse up and clicked on container")
})
abc.addEventListener("mousedown", function(){
    document.querySelectorAll(".container")[0].innerHTML = "<b>Hello</b>"
    console.log("mouse down and clicked on container")
})

// Arrow functions
function sum(a, b){
    return a+b;
}

sum = (a, b)=>{
    return a+b;
}

// SetTime and SetInterval
logkaro = ()=>{
    document.querySelectorAll(".container")[0].innerText = "Settimeout fired"
    console.log("I am your log");
}
// setTimeout(logkaro, 2000);
clr = setInterval(logkaro, 5000);
clearInterval(clr);
// Use clearInterval/clearTimeout to cancel setInterval/setTimeout

// Local Storage
localStorage.setItem("name", "amar");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear()

// JSON (JavaScript Object Notation) - accepts only "double quotes"
let obj = {name: "amar", length: 1};
jso = JSON.stringify(obj);
console.log(typeof(jso));
parsed = JSON.parse(`{"name": "amar", "length": 1, "a": {"roll": "Business"}}`);
console.log(parsed);

// class in JavaScript
class Car {  // Create a class
    constructor(brand) {  // Class constructor
      this.carname = brand;  // Class body/properties
    }
  }
  mycar = new Car("Ford");
  console.log(mycar.carname)