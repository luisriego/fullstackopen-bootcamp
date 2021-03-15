import React from 'react'

export const Filter = ({searchHandle}) => {
    return (
        <>
            filter show with <input type="text" onChange={searchHandle} />
        </>
    )
}
