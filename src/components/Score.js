import React from "react"

function Score({teamName, className, score}) {
    return (
    <>
        <div className={className}>
            <h2 className={`${className}__name`}>{teamName}</h2>
            <div className={`${className}__score`}>{score}</div>
        </div>      
    </>
    )
}

export default Score