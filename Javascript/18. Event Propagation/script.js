// rainbow.addEventListener("mouseover",()=>{
//     violet.style.backgroundColor = "violet";
//     indigo.style.backgroundColor = "indigo";
//     blue.style.backgroundColor = "blue";
//     green.style.backgroundColor = "green";
//     yellow.style.backgroundColor = "yellow";
//     orange.style.backgroundColor = "orange";
//     red.style.backgroundColor = "red";
// });

// violet.addEventListener("mouseover", ()=>{
//     violet.style.backgroundColor= "violet";
// })
// indigo.addEventListener("mouseover", ()=>{
//     indigo.style.backgroundColor= "indigo";
// })
// blue.addEventListener("mouseover", ()=>{
//     blue.style.backgroundColor= "blue";
// })
// green.addEventListener("mouseover", ()=>{
//     green.style.backgroundColor= "green";
// })
// yellow.addEventListener("mouseover", ()=>{
//     yellow.style.backgroundColor= "yellow";
// })
// orange.addEventListener("mouseover", ()=>{
//     orange.style.backgroundColor= "orange";
// })
// red.addEventListener("mouseover", ()=>{
//     red.style.backgroundColor= "red";
// })

// let divs = document.querySelectorAll("div");
// divs.forEach((ele) => {
//     console.log(ele.textContent);

//     ele.addEventListener("mouseenter", ()=>{
//         ele.style.backgroundColor = ele.textContent;
//     })

//     ele.addEventListener("mouseleave", ()=>{
//         ele.style.backgroundColor = "white";
//     })
// });

// Event Propagation - It is a process in which event travel through the DOM Tree.(node to root)
// Bubbling - Moving target to root element
// Capturing - Moving root to node in DOM tree
let main = document.querySelector("main");
let section = document.querySelector("section");
let article = document.querySelector("article");

main.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    console.log("main");
    main.style.backgroundColor = "red";
},0);

section.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    console.log("section");
    section.style.backgroundColor = "yellow";
},0);


article.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    console.log("article");
    article.style.backgroundColor = "green";
},0);

article.addEventListener("click", (e)=>{
    console.log("I am article 2");
},0);





