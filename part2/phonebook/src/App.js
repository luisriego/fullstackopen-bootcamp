import React, { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search, setSearch] = useState('')

  const nameChange = (e) => {
    setNewName(e.target.value)
  }

  const numberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()

    if (persons.filter(e => e.name === newName).length > 0) {
      return alert(`${newName} is already added to fonebook`)
    }

    setPersons([...persons, {name: newName, number: newNumber}])
  }

  const searchHandle = (e) => {
    setSearch(e.target.value)
  }

  const filter = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchHandle={searchHandle} />
      {/* filter show with <input type="text" onChange={searchHandle} /> */}
      <PersonForm submitHandle={submitHandle} nameChange={nameChange} numberChange={numberChange} />
      <h2>Numbers</h2>
      <Persons persons={filter} />
    </div>
  )
}

export default App