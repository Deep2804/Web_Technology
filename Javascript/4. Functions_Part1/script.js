// var a = 10
// let b = 20
// const c = 30
// console.log(a,b,c)
// console.log(window)


// console.log("Hello")
// var a 
// console.log(a)
// var b
// console.log(c)
// a=10
// b=20
// console.log(c)
// b=30
// console.log(a,b,c);
// var c
// c= 600
// console.log(a)

test();

//~ Function Declaration
function test(){
    console.log("Hello")
    console.log("Hi")
    console.log("Bye")
}

//~ Function Calling
test();
test();
test();
test();


//~ Named Function
console.log("Start");
var a =10
console.log(a);
function abc(){
    console.log(a);
    console.log("Hello");
}

var b = 100
console.log(c);
 b = 400
 abc()
 console.log(a,b,c);
 var c = 1000
 console.log("End");


 
//~ Anonymous Function
//^ function(){} 

//~ Function Expression
var fun = function(){
    console.log("I am Function Expression")
} 
fun()
console.log(fun)

//~ Named Function Expression
var x = function abc(){
    console.log("I am Named Function")
}

x();