// let z = (function(){
//     var a = 10;
//     var b = 20;
//     return a+b;
// })()
// console.log(z); 


//  Array LITERALS
// var arr1 = [10]


//  Array Constructor- single element define the size of array
// var arr2 = new Array(10);

// console.log(arr1);

// ARRAY is HETEROGENOUS IN NATURE 
// var arr = [10,"Hello",true,function(){},{},[],undefined,null]

// var arr = [10,20,30,40,50];
// console.log(arr[0]); //10
// console.log(arr[2]); //30
// console.log(arr[3]); //40

// arr[5] = 200;
// console.log(arr);


// Array METHODS
var arr1 = [10,20,30,40,50];

console.log(arr1.length);

// POP Method- Removes the last element from an array and returns it. 
console.log(arr1.pop());
console.log(arr1);

// Push Method - Appends new elements to the end of an array, and returns the new length of the array.
arr1.push("Hello");
console.log(arr1);

// Unshift Method -Inserts new elements at the start of an array, and returns the new length of the array. 
arr1.unshift("Welcome");
console.log(arr1);

// Shift Method- Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr1.shift();
console.log(arr1);


// Slice Method- Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
let arr2 = [10,20,30,40,50];
let x = arr2.slice(1,4);
console.log(x);
console.log(arr2);



// Splice Method-Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
var arr3 = [100,200,300,400,500];
arr3.splice(1,3,"Hello","Welcome",4000);
console.log(arr3);