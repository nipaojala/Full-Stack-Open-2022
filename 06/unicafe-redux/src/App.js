import React from "react"

const App = ({store}) => {
  return (
    <div>
      <button onClick={e => store.dispatch({type: 'GOOD'})}>good</button>
      <button onClick={e => store.dispatch({type: 'BAD'})}>bad</button>
      <button onClick={e => store.dispatch({type: 'OK'})}>ok</button>
      <button onClick={e => store.dispatch({type: 'RESET'})}>reset</button>
      <div>
        {/* {map.map(element => <p>{element}</p>)} */}
        {store.getState().good}         {store.getState().bad}           {store.getState().ok}
      </div>
    </div>
  )
}
export default App