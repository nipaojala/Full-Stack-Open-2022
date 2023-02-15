import { useCounterValue } from "../CounterContext"


const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  return (
    <div style={style}>
    {useCounterValue()}
    </div>
  )
}

export default Notification
