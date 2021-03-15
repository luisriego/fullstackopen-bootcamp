import React from 'react'
import { Person } from '../Person'

export const Persons = ({persons}) => {
    return (
        <>
            {
                persons.map((person) => {
                    return <div key={person.name}><Person person={person} /></div>
                })
            }
            
        </>
    )
}
