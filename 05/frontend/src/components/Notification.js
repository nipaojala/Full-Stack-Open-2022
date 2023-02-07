const Notification = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null
  }

  return (
    <div style={{ color: "red", backgroundColor: "green", padding: "20px", fontSize: 25 }} className="error">
      {errorMessage}
    </div>
  )
}

export default Notification