import { useSelector } from 'react-redux'
const Notification = () => {
  let notification = useSelector(state => state.notification)

  

  return (
    <div>
        {notification}
        <br/>
    </div>
  )
}

export default Notification