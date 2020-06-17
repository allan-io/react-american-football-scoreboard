import React from "react"

const Button = ({ className, setter, label, points, score }) => {

    console.log(setter)
    return (
        <button className={className} onClick={() => setter(() => score + points)}>{label}</button>
    )
}

export default Button
