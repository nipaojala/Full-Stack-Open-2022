import axios from 'axios'
const baseUrl = "http://localhost:3001/api/persons"
const getAll = () => {
    const request = axios.get(baseUrl)
    console.log(request)
    return request.then(response => response.data)
  }

  const add = newObject =>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
  
  }

  const deleteElement = personId => {
    const request = axios.delete(baseUrl +  "/" + personId)
    return request.then(response => response.data)
  
  }

  const updatePerson = person => {
    const request = axios.put(baseUrl + "/" + person.id, person)
    return request.then(response => response.data)
  
  }
// eslint-disable-next-line import/no-anonymous-default-export
export default {deleteElement, add, getAll, updatePerson}