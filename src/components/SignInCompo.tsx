"use client"
import { useState } from "react"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "seek-solution/utils/firebase";

const SignInCompo = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignin = async (e: any) => {
        e.preventDefault()
        console.log("email", email);
        console.log("password", password);
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log("user", user);

    }

    return <form onSubmit={handleSignin}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signin</button>
    </form>

}

export default SignInCompo