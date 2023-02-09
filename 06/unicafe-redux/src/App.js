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
        good {store.getState().good}<br/>
        bad {store.getState().bad}<br/>
        ok {store.getState().ok}
      </div>
    </div>
  )
}
export default App