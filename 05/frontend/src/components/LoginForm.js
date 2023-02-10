import PropTypes from 'prop-types'

const LoginForm = (props) => {
  return (
    <div>
        <form onSubmit={props.handleLogin}>
          <h1>Login to an application</h1>
          <div>
            Username
            <input type="text" value={props.username} id = 'username' name="Username" onChange={({target}) => props.setUsername(target.value)}></input>
          </div>
          <div>
            Password
            <input type="text" value={props.password} id = 'password' name="Password" onChange={({target}) => props.setPassword(target.value)}></input>
          </div>
          <button id="login-button" type ="submit">login</button>
        </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm