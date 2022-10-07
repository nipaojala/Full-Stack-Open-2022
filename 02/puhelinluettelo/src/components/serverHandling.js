import axios from 'axios'

const getAll = () => {
    const request = axios.get("http://localhost:3030/persons")
    console.log(request)
    return request.then(response => response.data)
  }

  const add = newObject =>{
    const request = axios.post("http://localhost:3030/persons",newObject)
    return request.then(response => response.data)
  
  }

  const deleteElement = personId => {
    const request = axios.delete("http://localhost:3030/persons/"+ personId)
    return request.then(response => response.data)
  
  }
// eslint-disable-next-line import/no-anonymous-default-export
export default {deleteElement, add, getAll}