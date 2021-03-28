import axios from "axios"

const BASE_URL_API = `http://localhost:3001/api/persons`
// const BASE_URL_API = 'https://sheltered-gorge-43407.herokuapp.com/api/persons'


export const getAll = () => {
    return axios.get(BASE_URL_API)
}

export const create = ({name, number}) => {
    return axios.post(BASE_URL_API, { name, number })
      .then(res => {
        console.log([res.data.name, res.data.number])
        return [
          `Created ${[res.data.name, res.data.number]}`,
          'success'
        ]
      })
      .catch(err => {
        return [
          `${err.message}`,
          'error'
        ]
      })
}

export const edit = (person) => {
  return axios.put(`${BASE_URL_API}/${person.id}`, person)
    .then(res => {
      return [
        `Edited ${res.data.name}`,
        'success'
      ]
    })
    .catch(err => {
      console.log(err.data.message)
      return [
        `${err.message}`,
        'error'
      ]
    })
}

export const deletePerson = (id) => {
  return axios.delete(`${BASE_URL_API}/${id}`)
}
