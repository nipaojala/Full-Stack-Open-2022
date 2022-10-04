import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
const Search = ({content, handleChange}) => {
  return(
    <form>
    find countries <input value={content}
    onChange={handleChange}
    />
  </form>
  )
}

const ListCountires = ({list, handleChange}) => {
  if (list.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if (list.length === 1) {

    return (
      <CountryInformation country={list[0]}/>
    )
  }
  if (list.length === 0) {

    return (
      <div> no results</div>
    )
  }
  if(list.length < 11) {
      return (
        <div>
          {list.map(country =>
          <li key={country.name}>
          {country.name}
          <button value={country.name} onClick={handleChange}> show </button>
          </li>
        )}
      </div>
      )
  }
}

const CountryInformation = ({country}) => {
  return (
    <div>
      <h1>
        {country.name}
      </h1>
      capital {country.capital}<br></br>
      area {country.area}
      <h2>
        languages:
      </h2>
      <ul>
      {country.languages.map(language =>
          <li key={language.name}>
          {language.name}</li>
        )}
      </ul>
      <svg width="200" height="200" xmlns="https://flagcdn.com/pe.svg">
      <image href={country.flags.svg} height="200" width="200" />
      </svg>
    </div>
  )
}

const App = () => {
  const [countryList, SetCountryList] = useState([])
  const [content, setContent] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setContent(event.target.value)
  }

  useEffect(() => {
    axios
    .get("https://restcountries.com/v2/name/" + content)
    .then(response => {
      SetCountryList(response.data)
    })
  }, [content])

  return (
    <div>
    <Search
      content={content}
      handleChange={(event) => handleChange(event)}
    />
    <ListCountires list={countryList} handleChange={handleChange}
    />
    </div>
  )
}

export default App;
