import React, { useEffect, useState } from 'react'

import { Filter } from './components/Filter'
import Notification from './components/Notification'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { getAll, create, edit } from './services/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState([])
  
  useEffect(() => {
    getAll().then(({data}) => setPersons(data))
  }, [persons])

  // useEffect(() => {
  //   console.log('hola')
  // }, [newNumber])

  const nameChange = (e) => {
    setNewName(e.target.value)
  }

  const numberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    const actualPerson = persons.filter(e => e.name === newName)
   
    if (actualPerson.length > 0  && actualPerson[0].number === newNumber ) {
      return alert(`${newName} is already added to fonebook`)
    }
  
    if (actualPerson.length > 0 && actualPerson[0].number !== newNumber) {
      edit({ id: actualPerson[0].id, name: newName, number: newNumber})
        .then(resp => {
          setMessage([
            `Edited ${resp.name}`,
            'success'
          ])
        })

      return
    }

    create({name: newName, number: newNumber})
      .then(resp => {
        setMessage([
          `Added ${resp.name}`,
          'success'
        ])
      })
      .catch(err => {
        setMessage([
          `Edited ${err.name}`,
          'error'
        ])
      })
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
      <Notification message={message} />
      <Filter searchHandle={searchHandle} />
      {/* filter show with <input type="text" onChange={searchHandle} /> */}
      <PersonForm submitHandle={submitHandle} nameChange={nameChange} numberChange={numberChange} />
      <h2>Numbers</h2>
      <Persons persons={filter} />
    </div>
  )
}

export default App