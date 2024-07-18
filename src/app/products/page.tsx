"use client"

import { useEffect, useState } from "react"
import { collection, deleteDoc, doc, getDocs, getFirestore, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import ProductAddPage from "./add/page";

const ProductsPage = () => {

    const db = getFirestore()

    const [intervalCount, setIntervalCount] = useState(0)

    const [products, setProducts] = useState<Array<any>>([])

    const initialise = async () => {
        const q = query(collection(db, "products"), orderBy("price"), limit(10));

        onSnapshot(q, (snap) => {
            const newArr: Array<any> = []
            console.log("onSnapshot called");

            snap.forEach((doc) => {
                console.log("doc", doc.data());

            });
            snap.forEach((doc) => {
                newArr.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            setProducts([...newArr])
        });

    }

    const deleteRow = async (id: string) => {
        await deleteDoc(doc(db, "products", id));

    }

    useEffect(() => {

        initialise()


    }, [])

    return <div>
        <h1>{intervalCount}</h1>
        <table border={2} >
            <thead>
                <tr>
                    <th style={{ border: "1px solid", padding: "10px" }}>Id</th>
                    <th style={{ border: "1px solid", padding: "10px" }}>Name</th>
                    <th style={{ border: "1px solid", padding: "10px" }}>Price</th>
                    <th style={{ border: "1px solid", padding: "10px" }}>Qty</th>
                    <th style={{ border: "1px solid", padding: "10px" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((res: any) =>
                    <tr key={res.id}>
                        <td style={{ border: "1px solid", padding: "10px" }}>{res?.id}</td>
                        <td style={{ border: "1px solid", padding: "10px" }}>{res.name}</td>
                        <td style={{ border: "1px solid", padding: "10px" }}>{res.price}</td>
                        <td style={{ border: "1px solid", padding: "10px" }}>{res.qty}</td>
                        <td style={{ border: "1px solid", padding: "10px" }}><button onDoubleClick={()=>deleteRow(res.id)}>Delete</button></td>
                    </tr>)}
            </tbody>
        </table>
    </div>

}

export default ProductsPage