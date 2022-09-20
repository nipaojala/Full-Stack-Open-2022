import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine  = ({text, value, sign}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
        <td>{sign}</td>
      </tr>
  )
}

const Statistics = ({number1, number2, number3, allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
  return (
    <table>
      <StatisticLine text="good" value={number1}/>
      <StatisticLine text="bad" value={number2}/>
      <StatisticLine text="neutral" value={number3}/>
      <StatisticLine text="all" value={number1+number2+number3}/>
      <StatisticLine text="average" value={((number1-number3)/(number1+number2+number3)).toFixed(1)}/>
      <StatisticLine text="positive" value={((number1+number2)/(number1+number2+number3)*100).toFixed(1)} sign="%"/>
    </table>
  )
  }
}

const App = () => {
  const [allClicks, setAll] = useState([])
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increasegood = () => {
    setGood(good + 1)
    setAll(allClicks.concat('G'))
  }
  const increaseneutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('N'))
  }
  const increasebad = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={increasegood}
        text='good'
        />
      <Button
        handleClick={increaseneutral}
        text='neutral'
        />
      <Button 
        handleClick={increasebad}
        text='bad'
        />
      <h1>Statistics</h1>
      <Statistics allClicks={allClicks} number1={good} number2={neutral} number3={bad} sign="%"/>
    </div>
  )
}

export default App