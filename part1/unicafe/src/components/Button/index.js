import React from 'react'

export const Button = (props) => {
    return (
        <>
            <button onClick={props.action}>{props.text}</button>
        </>
    )
}
