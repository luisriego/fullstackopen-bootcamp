import React, { useState } from 'react'
import { Persons } from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const inputChange = (e) => {
    setNewName(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()

    if (persons.filter(e => e.name === newName).length > 0) {
      return alert(`${newName} is already added to fonebook`)
    }
    setPersons([...persons, {name: newName}])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandle}>
        <div>
          name: <input type="text" onChange={inputChange}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App