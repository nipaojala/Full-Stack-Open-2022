import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import login from './services/login'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)


  useEffect(() =>{
    const user = window.localStorage.getItem('loggedUser')
    if (user) setUser(JSON.parse(user))
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      console.log({username, password})
      const user = await login.login({username, password})
      setUser(user)
      window.localStorage.setItem(
        "loggedUser", JSON.stringify(user)
      )
      setUsername('')
      setPassword('')
    } catch (exception) {
      setError('wrong credentials')
      setError("mdofmdofdof")
      console.log(error)
      setTimeout(() => {
        setError(null)
      }, 5000)
      }
    }

  // const blogForm = () => {
  //   return (
  //     <form>
  //       <input name="newBlog"
  //     </form>
  //   )
  // }

const handleLogout = () => {
  window.localStorage.removeItem('loggedUser')
  setUser(null)
  
}

  const loginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <h1>Login to an application</h1>
        <div>
          Username
          <input type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)}></input>
        </div>
        <div>
          Password
          <input type="text" value={password} name="Password" onChange={({target}) => setPassword(target.value)}></input>
        </div>
        <button type ="submit">login</button>
      </form>
    )
  }

  const blogList = (user) => {
    return (
      <div>
      <h2>blogs</h2>
      <p>{user.name} logged in </p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      <button onClick={handleLogout}>logout</button>
      </div>
    )
  }
  return (
    <div>
      <Notification errorMessage={error}/>

      {!user && loginForm()}
      {user && blogList(user)}
    </div>
  )
}

export default App