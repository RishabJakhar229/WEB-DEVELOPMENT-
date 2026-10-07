
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() { console.log("login"); }
    logout() { console.log("logout"); }
    static sendEmail() { }
}

class Customer extends User {
    cart = []
    constructor(name, email) {
        super(name, email)
        // this.name = name;
        // this.email = email;
    }
    buyProduct() { console.log("buy Product"); }
    addToCart(item) { this.cart.push(item) }
    showCartItems() { console.log(this.cart); }
    // login() { }
    // logout() { }
}

class Seller extends User {

    // constructor(name, email) {
    //     //     this.name = name;
    //     //     this.email = email;
    // }

    addProduct() { console.log("addProduct"); }
    //     login() { }
    //     logout() { }
}

class Admin extends User {

    // constructor(name, email) {
    //     // this.name = name;
    //     // this.email = email;
    // }
    hideProduct() { console.log("hide product"); }
    // login() { }
    // logout() { }

}

const c1 = new Customer("Rishab", "rishab@gmail.com")
const s1 = new Seller("jayant", "jayant@gmail.com")
const a1 = new Admin("mayank", "mayank@gmail.com")
console.log(c1);
// console.log(s1);
// console.log(a1);
// c1.logout()
c1.addToCart("mackbook")
c1.showCartItems()


class PremuiumCustomer extends Customer {
    constructor(name, email, pass) {
        super(name, email, pass)
    }
}

const pc1 = new PremuiumCustomer("rishab", "shjuiwi")
console.log(pc1);







