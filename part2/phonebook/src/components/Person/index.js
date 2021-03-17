import React from 'react'
import { deletePerson } from '../../services/Persons'

export const Person = ({person}) => {
    const deleteHandle = () => {
        if (window.confirm(`Delete ${person.name}`)) {
            deletePerson(person.id)
        }
        
    }
    return (
        <div>
            <p>{person.name} {person.number} <button onClick={deleteHandle}>delete</button></p>
        </div>
    )
}
