import axios from "axios"

const BASE_URL_API = `http://localhost:3001/persons`

export const getAll = () => {
    return axios.get(BASE_URL_API)
}

export const create = ({name, number}) => {
    return axios.post(BASE_URL_API, { name, number })
      .then(res => {
        return res.data
      }) 
}

export const edit = (id, name, number) => {
  return axios.put(BASE_URL_API, { id, name, number })
      .then(res => {
        return res.data
      }) 
}

export const deletePerson = (id) => {
  return axios.delete(`${BASE_URL_API}/${id}`)
}
