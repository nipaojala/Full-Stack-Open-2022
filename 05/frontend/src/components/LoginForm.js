const LoginForm = (props) => {
  const hideWhenVisible = { display: props.visibility ? 'none' : '' }
  const showWhenVisible = { display: props.visibility ? '' : 'none'}
  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => props.setVisibility(true)}>log in</button>
      </div>
      <div style={showWhenVisible}>
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
        <button onClick={() => props.setVisibility(false)}>cancel</button>
      </div>
    </div>
  )
}

export default LoginForm