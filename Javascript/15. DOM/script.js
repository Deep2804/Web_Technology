// DOM- Document Object Model
// DOM Selectors
// Returns a reference to the first object with the specified value of the ID attribute.
// document.getElementById();

// Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
// document.getElementsByClassName();

// Retrieves a collection of objects based on the specified element name.
// document.getElementsByTagName();

// Returns the first element that is a descendant of node that matches selectors.
// document.querySelector();

// Returns all element descendants of node that match selectors.
// document.querySelectorAll();
// 
//

// let h1 = document.getElementById("head");
// console.log(h1);

// // // HTMLCollection is an impure array
// let section = document.getElementsByClassName("container")
// console.log(section)
// console.log(section[2])

// // check array is pure or not and returns the boolean value
// console.log(Array.isArray(section));

// // Creates an array from an iterable object.
// let pureArr = Array.from(section)
// console.log(pureArr);

// console.log(Array.isArray(pureArr));
// console.log(pureArr.pop());

// // ID
// let head = document.getElementById("head");
// console.log(head.textContent);

// // CLASS
// let container = document.getElementsByClassName("container");
// console.log(container[0].textContent);
// console.log(container[1].textContent);
// console.log(container[2].textContent);

// TAGNAME
// let section = document.getElementsByTagName("section");
// console.log(section)
// console.log(section[1].textContent);

// QuerySelector
let head1 = document.querySelector("#head");
console.log(head1);
console.log(head1.textContent)

let container1 = document.querySelector(".container");
console.log(container1);

 let container2 = document.querySelectorAll(".container");
 console.log(container2);
 console.log(Array.isArray(container2));

 container2.forEach((x) => {
    console.log(x.textContent);
 })


let element = document.querySelector("p, #head, .container");
console.log(element);


