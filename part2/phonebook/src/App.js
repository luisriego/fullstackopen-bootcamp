import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { setPerson } from './services/bd'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(({data}) => {
        setPersons(data)
      })
  }, [persons])
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

    setPerson({name: newName, number: newNumber})
  }

  const searchHandle = (e) => {
    setSearch(e.target.value)
  }

  let filter = []
  if (persons.length > 0) {
    filter = persons.filter((person) => {
      return person.name.toLowerCase().includes(search.toLowerCase())
    })
  }

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