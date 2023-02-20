import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    // console.log("modfsdofsdfdsf " + event.target.value)
    setValue(event.target.value)
    // console.log(value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  useEffect(() => {
    if (name) {
    axios.get("https://restcountries.com/v2/name/" + name)
    .then(response => {
      setCountry(response.data)
    })
    .catch((error) => {
      console.log(error)
      setCountry(null)
    })
  }
  }, [name])
  return {country, setCountry, useEffect}
}

const Country = ({ country }) => {

  if (!country.country) {
    return (
      <div>
        not found...
      </div>
    )
  }
  return (
    <div>
      <h3>{country.country[0].name} </h3>
      <div>capital {country.country[0].capital} </div>
      <div>population {country.country[0].population}</div> 
      <img src={country.country[0].flag} height='100' alt={`flag of ${country.country[0].name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
    const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }
  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type='submit'>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App