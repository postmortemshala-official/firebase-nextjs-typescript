"use client"
import "./../../utils/firebase"

import React from "react"

const Provider = ({ children }: {
    children: React.ReactNode
}) => {

    return <>
    {children}
    </>

}

export default Provider