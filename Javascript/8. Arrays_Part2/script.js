// Array Methods
// At() - Returns the item located at the specified index.
 let arr = [10,20,30,40,50]
console.log(arr.at(3));

// includes- Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arr.includes(20))
console.log(arr.includes(200))

// toString() - Returns a string representation of an array.
console.log(arr.toString())

// join()- Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr.join())


// concat()- Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let a = [100,200,300]
let b = [400,500,600]

console.log(a.concat(b));
console.log(b.concat(a));
console.log(b.concat(a,b));


console.log(a.concat(a));
console.log(a.concat(a,b,a,b));


let arr1 = [10,20,30,40,50];

for(let i=0;i<=arr1.length;i++){
    console.log(i);
}

// forEach
let x = arr1.forEach((ele,i,arr1) => {
    console.log(ele,i,arr1);
    return "i am For Each";
});


let y = arr1.map((ele,i,arr1) => {
    console.log(ele,i,arr1);
    return "i am map";
});

console.log(x);
console.log(y);
