


// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")

// let btn = document.querySelector("#btn")

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
//     h1.classList.remove("hidden")
//     h1.classList.add("visible")
// }

// btn.addEventListener("click" , () => {
//     console.log("Hellooo Sirr jii");
// })

// div.addEventListener('click', revealGift)

// btn.addEventListener('click' , (e) => {
//     console.log(e);
//     console.log(e.key); // keyboard wale event likh ne pade ge tab undefined hat jaye ga
//     console.log(e.clientX);
//     console.log(e.clientY);
// })



// let counter = 0

// function fun1(e) {
//     if (counter < 4) {
//         console.log(e);
//         counter++;
//     } else {
//         btn.removeEventListener('click', fun1)
//     }

// }

// btn.addEventListener('click', fun1)



// let outer = document.querySelector("#outer")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")


// body.addEventListener('click', (e) => {
//         e.stopPropagation()
//     console.log("body");
// })

// outer.addEventListener('click', (e) => {
//         e.stopPropagation()
//     console.log("Outter");
// })

// inner.addEventListener('click', (e) => {
//         e.stopPropagation()
//     console.log("inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("btn2");
// })




let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 12342,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "2",
        name: "Samsung 15",
        price: 62324,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "3",
        name: "MI 23",
        price: 35354,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "4",
        name: "Poco 10",
        price: 43534,
        imgUrl: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "5",
        name: "Lava 12",
        price: 53422,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");


    // card.setAttribute("datasetID",product.id)
    card.dataset.productID = product.id;
    const dltbtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltbtn.textContent = "Remove product"
    addToCartBtn.textContent = "Add to Cart"

    // dltbtn.addEventListener("click", (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>

       <div>
            <div>
                <div>
                    <div id = "inner-div>
          
                    </div>
                </div>
            </div>
        </div>
          
 
    `

    // document.querySelector("inner-div").append(dltbtn)

    // card.append(dltbtn)
    // card.append(addToCartBtn)

    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation()

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if (e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove()
    // }

    // console.log(dltBtn.parentElement.dataset.productID);

    if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove()
        // dltBtn.closest(".singleProduct").remove()
    }


    console.log(dltBtn.closest(".singleProduct"));

})































































