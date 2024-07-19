"use client"
import {  onAuthStateChanged,signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "seek-solution/utils/firebase";

const HomeCompo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout=async()=>{
    signOut(auth)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setIsLoggedIn(user != null)
    })
  }, [])

  return isLoggedIn ?
    <>
    <Link href={"/profile"}>
      <button>Goto profile</button>
    </Link>
    <br/>
    <button onClick={handleLogout}>Logout</button>
      </> :
    <Link href={"/signup"}>
      <button>Goto Signup</button>
    </Link>
}
export default HomeCompo