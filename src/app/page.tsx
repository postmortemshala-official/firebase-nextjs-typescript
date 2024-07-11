"use client"
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HpmePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const auth = getAuth();

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
export default HpmePage