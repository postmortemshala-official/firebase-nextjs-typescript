"use client"

import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db } from "seek-solution/utils/firebase"

const ProductAddPage = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(0)


    const insertValue = async () => {
        try {
            const docRef = await addDoc(collection(db, "products"), {
                name: name,
                price: price,
                qty: qty
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }



    return <form onSubmit={(e) => {
        e.preventDefault()
        console.log("name", name);
        console.log("price", price);
        console.log("qty", qty);

        insertValue()


    }}>
        <label id="name">
            Name
        </label>
        <input name="name" id="name" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label id="price">
            Price
        </label>
        <input name="price" type="number" placeholder="Enter product price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <br />

        <label id="qty">
            Qty
        </label>
        <input name="qty" type="number" placeholder="Enter product qty" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
        <br />

        <button type="submit">Add product</button>
    </form>

}


export default ProductAddPage