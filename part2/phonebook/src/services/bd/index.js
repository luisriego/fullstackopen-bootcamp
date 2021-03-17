import axios from "axios"

const BASE_URL_API = `http://localhost:3001/persons`

export const setPerson = ({name, number}) => {
    return axios.post(BASE_URL_API, { name, number })
      .then(res => {
        return res.data
      })
    
}