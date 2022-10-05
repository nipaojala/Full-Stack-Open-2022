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

const ListCountires = ({list, handleChange, api_key}) => {
  if (list.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if (list.length === 1) {

    return (
      <CountryInformation country={list[0]} api_key={api_key}/>
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

const CountryInformation = ({country, api_key}) => {
  const [weatherData,setWeatherdata] = useState([])
  const weatherApi = "http://api.openweathermap.org/data/2.5/weather?q="+country.capital+"&appid="+api_key
  useEffect(() => {
    axios
    .get(weatherApi)
    .then(response => {
      setWeatherdata(response.data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
console.log(weatherData)
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
      <h1>Weather in {country.capital}</h1>
      <p>temperature {(weatherData.main.temp-273.15).toFixed(2)} Celcius</p>
      <img src = {"http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"} alt="weatherImage"/>
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  )
}

const App = () => {
  const [countryList, SetCountryList] = useState([])
  const [content, setContent] = useState('')
  const api_key = process.env.REACT_APP_API_KEY
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
    <ListCountires list={countryList} handleChange={handleChange} api_key={api_key}
    />
    </div>
  )
}

export default App;