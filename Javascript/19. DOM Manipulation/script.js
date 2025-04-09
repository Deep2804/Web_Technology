// DOM Manipulation

// let h1 = document.createElement("h1");
// // h1.textContent = "<mark>Hello World</mark>";
// h1.innerHTML = "<mark>Hello World</mark>";


// console.log(h1);

// document.body.appendChild(h1);

let data = [10,20,30,40,50];

data.map(() => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let btn = document.createElement("button");

    h1.textContent = "John";
    btn.textContent = "View More";

    div.setAttribute("id", "card");
    img.setAttribute("src", "fakepath");

    div.append(img,h1,btn);

    console.log(div);
    document.body.append(div);

})


