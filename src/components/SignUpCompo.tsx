"use client"
import { useState } from "react"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "seek-solution/utils/firebase";

const SignUpCompo = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleSignup = async (e: any) => {
        e.preventDefault()
        console.log("email", email);
        console.log("password", password);
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log("user", user);

    }

    return <form onSubmit={handleSignup}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signup</button>
    </form>

}

export default SignUpCompo