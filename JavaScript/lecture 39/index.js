
// let h1 = document.getElementById("h1")


// let h1 = document.querySelector("h1") // tag name se access
// let h1 = document.querySelector(".h1") // class se access
// let h1 = document.querySelector("#h1")  // id se access

// let h1 = document.querySelectorAll("h1")
// console.log(h1);


// let p = document.querySelector("p")

// p.textContent = "hello bacchoo kaise ho"
// p.innerHTML = "<h2>hello dostooooo</h2>"  // very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);



// p.setAttribute("style","background-color : pink")

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled","true")
// btn.removeAttribute("disabled")
// btn.textContent = "remove"

// let res = p.getAttribute("style")
// console.log(res);

// p.removeAttribute("style")


// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));



// p.style.backgroundColor = "red" //Camel case

// p.dataset.helloDosto = "hii"

// console.log(p.dataset.helloDosto);




// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "hello"
// div2.textContent = "hello2"

let body = document.querySelector("body")

// // body.appendChild(div)
// // body.appendChild(div2)

// body.append(div,div2)  // insert in last of body
// body.prepend(div,div2)  //insert in start of body


let products = [
    {
        name: "iphone 14",
        price: 63836
    },
    {
        name: "Samsung 14",
        price: 63356
    },
    {
        name: "MI 24",
        price: 32836
    },
    {
        name: "Poco 10",
        price: 53422
    },
    {
        name: "Vivo 4",
        price: 36547
    }
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
  const card = document.createElement("p")
  card.textContent = `${product.name} - ${product.price}`
  productList.append(card)
})

let h2 = document.querySelector("#h22")

// body.removeChild(h2) // you have to access parent


h2.remove()  // directly on the element you want to remove


let clone = productList.cloneNode(true)

// body.append(clone )


const items = productList.children

productList.insertBefore(h2 , items[2]) // for precise positining

items[2].before(h2)
items[2].after(h2)


