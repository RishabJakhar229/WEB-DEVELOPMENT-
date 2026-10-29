import { useState } from "react"

function Product({ name }) {

    const [quantity, setQuantity] = useState(0);

    return (
        <div>
            <h3>{name}</h3>

            <button onClick={() => setQuantity((prev) => prev + 1)}>Quantity : {quantity}</button>
        </div>
    )

}

function key() {
    // const students = ["kartik", "jayant", "mayank", "sahil", "rishab", "yukki", "monu", "vishu"];
    const [products, setProducts] = useState([
        { id: 1, name: "mouse" },
        { id: 2, name: "keyboard" },
        { id: 3, name: "moniter" },
        { id: 4, name: "headphone" },
        { id: 5, name: "harddrive" }
    ])

    function removeFirstProduct() {
        setProducts((prev) => prev.slice(1))
    }

    return (
        <>
            <ul>
                {products.map((id , name) => (
                    <Product key={id} name={name} />
                ))}
            </ul>

            <button onClick={removeFirstProduct}>Remove first product</button>
        </>
    )
}

export default key