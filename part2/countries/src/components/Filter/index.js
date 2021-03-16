import React from 'react'

export const Filter = ({searchHandle}) => {
    return (
        <>
            find countries <input type="text" onChange={searchHandle} />
        </>
    )
}