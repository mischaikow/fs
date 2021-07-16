import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = () => {
  const request = axios.get(`${baseUrl}/db`)
  return request.then(response => response.data) 
}

const create = newObject => {
  const request = axios.post(`${baseUrl}/persons`, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/persons/${id}`, newObject)
  return request.then(response => response.data)
}

const drop = id => {
  const request = axios.delete(`${baseUrl}/persons/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, drop }
