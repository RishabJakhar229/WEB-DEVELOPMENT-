
// // LOCAL STORAGE //

// let storage = localStorage.setItem("num", 1)    // to set the item in local storage  //

// localStorage.setItem("num1", 145)
// localStorage.setItem("num2", 121)
// localStorage.setItem("num3", 128)



// let result = localStorage.getItem("nishant") // if i want to access that value which is not in storage so browser will give null //
// let result1 = localStorage.getItem("num")
// console.log(result); // null
// console.log(result1); // 1



// let result2 = localStorage.key(0)  // it takes index like array , if exist then it return key name on particular index otherwise it will return null //
// console.log(result2); // num



// let result3 = localStorage.removeItem("num") // it will remove item from the local storage and it requires key , it is for specific item  //
// console.log(result3); // undefined


// localStorage.clear() // it will clear local storage completely  //



// document.querySelector("#local-storage").addEventListener("click", () => {

//     localStorage.clear()

// })


// // SESSION STORAGE //

// document.querySelector("#session-storage").addEventListener("click", () => {

//     sessionStorage.setItem("session", "item")

// })




// OLD WAY FOR API //

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET","https://api.github.com/users/nishantsaini2331",true)
// xhttp.send();



// NEW WAY //

// fetch("https://api.github.com/users/nishantsaini2331").
//     then(data => data.json()).
//     then(data => console.log(data))



async function getUser(username = "nishantsaini2231") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}






document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `
        <img src=${data.avatar_url} alt="">
        <h2>${data.name}</h2>
        <i>Username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>Followers : ${data.followers}</p>
        <p>Followings : ${data.followings}</p>
        <p>Public Repos : ${data.public_repos}</p>
        `
})


// function updatestatus(){
// document.querySelector("#live-status").textContent = navigator.onLine ? "online" : "offline"
// }

// window.addEventListener("online",updatestatus)
// window.addEventListener("offline",updatestatus)
