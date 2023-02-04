const LoginForm = (props) => {
  return (
    <div>
        <form onSubmit={props.handleLogin}>
          <h1>Login to an application</h1>
          <div>
            Username
            <input type="text" value={props.username} name="Username" onChange={({target}) => props.setUsername(target.value)}></input>
          </div>
          <div>
            Password
            <input type="text" value={props.password} name="Password" onChange={({target}) => props.setPassword(target.value)}></input>
          </div>
          <button type ="submit">login</button>
        </form>
    </div>
  )
}

export default LoginForm