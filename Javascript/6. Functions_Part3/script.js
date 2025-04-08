//! Lexical Scoping- the ability of JS engine to search element from outside execution context(current scope)


//* debugger
// function parent(){
//     var a = 10;
//     var x = 100;
//     console.log(a,x);

//     function child(){
//         var b = 20;
//         console.log(b+a);
        
//     }
//     child();
// }

// parent();

//~ ----- JS Currying ----------
// function A(){
//     console.log("I am A");

//     function B(){
//         console.log("I am B");
//         function C(){
//             console.log("I am C");
    
//         }
//         return C;
//     }
//     return B;
// }

//  var x = A();
//  console.log(x);
//  x();

//&  JS Currying
// A()()();


//~ -------------- IIFE- Immediately Invoked Function Expression --------------
//^ (function (){
//^     console.log("I am IIFE")
//^ })();

//* (function (){
//*     console.log("I am IIFE 2")
//* })()


//~  -------------- Arrow Function --------------------------
let a = ()=>{
    console.log("I am Arrow Function 1");
}
a();

//! Single line
let b = ()=> console.log("I am Arrow Function 2");
b();

//! If no Parameter then we can ignore () and use _
let c = _=> console.log("I am Arrow Function 3");
c();

//! If one parameter is present then ignore ()
let d = n1 => console.log("I am Arrow Function 4",n1);
d(100);

//! If two parameter is present then use ()
let e = (n1,n2)=> console.log("I am Arrow Function 5",n1,n2);
e(100,200);

//& Implicit and Explicit Return
//^ Explicit Return- {} is mandatory for return keyword
let f = (n1,n2)=>{return n1+n2};
let val1 = f(10,20);
console.log(val1);

//^ Implicit return
let g = (n1,n2)=> n1+n2;
let val2 = g(200,300);
console.log(val2);


//~ -------------- Higher Order Callback Function ------------------
function sum(x,y){
    console.log(x+y);
}

function calculate(n1,n2,fun){
    console.log(fun);
    fun(n1,n2);
}

calculate(10,20,sum);

