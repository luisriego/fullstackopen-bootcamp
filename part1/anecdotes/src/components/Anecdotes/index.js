import React from 'react'

export const Anecdotes = (props) => {
    const {list, needle} = props
    
    const count = function(array, value) {
        return array.reduce((accumulate, item) => {
            return (value === item ? accumulate + 1 : accumulate)
        }, 0)
    }

    return (
        <>
            {count(list, needle)}
        </>
    )
}
