//!  ============ Types of Function =========================
//~ 1. -------- NAMED Function ---------

//^ Function Declaration
//* function test(){
//*     console.log("Hello JS");
//* }

//^ Function Calling or invoking
//* test();


//~ ------------ ANONYMOUS FUNCTION -------------
// function(){}

//& FUNCTION EXPRESSION
// console.log(a);
// a();
// var a = function(){
//     console.log("Fuction Expression")
// }
// console.log(a);
// a();


// function abc(){
//     console.log("ABC Expression");
// }

// var x = abc;
// console.log(x);
// x();

// var x = function abc(){
//     console.log("1000");
// }
// abc();


// function print(a,b){
//     var sum  = a+b;
//     console.log(sum);
//     return sum;
// }
// var x = print(10,20);
// console.log(x);

//~ ------------ NESTED FUNCTION -------------
console.log("Start");
function parent(){
    var car = "Audi";
    var money = 5000000;
    console.log("Parent",car,money);
    function child(){
        var toy = "TOY CAR";
        var saving = 100000;
        console.log("Child",toy,saving);
    }

    child();
}

parent();



console.log("Start");
function parent(){
    var car = "Audi";
    var money = 5000000;
    console.log("Parent",car,money);
    function child(){
        var toy = "TOY CAR";
        var saving = 100000;
        console.log("Child",toy,saving);
    }

    return child;
}
var x = parent();
console.log(x);
x();
