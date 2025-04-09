// DOM Events
// onclick
function clickfun(){
    console.log("Single Clicked");
}
// ondblclick
function clickDbl(){
    console.log("Double Click");
}
// onmouseenter
function Enter(){
    console.log("Mouse Entered");
}
// onmouseleave
function Leave(){
    console.log("Mouse Leaved");
}
// onmousemove
function Move(){
    console.log("Mouse Move");
}

// onkeydown
function Down(){
    console.log("Key Pressed");
}

// onkeyup
function Up(){
    console.log("Key Released");
}
// onChange
function Change(){
    console.log("Changed");
}

// onsubmit
function FormData(e){
    e.preventDefault();
    let email = document.querySelector("#email");
    let password = document.querySelector("#password"); 

    let user = {
        email: email.value,
        password: password.value,

    };

    console.log(user);
}


// onload
function PageLoad(){
    console.log("Webpage Loaded");
}

// onscroll
function Scroll(){
    console.log("Paragraph scrolled");
}
//