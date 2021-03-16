import { useEffect, useState } from "react";
import axios from 'axios'

import { Countries } from "./components/Countries";
import { Filter } from "./components/Filter";

function App() {
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        setCountries(data)
      })
  }, [])
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const searchHandle = (e) => {
    setSearch(e.target.value)
  }

  const filter = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="App">
      <Filter searchHandle={searchHandle} />
      <Countries countries={filter} />
    </div>
  );
}

export default App;
