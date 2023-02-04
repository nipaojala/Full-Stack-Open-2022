import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import login from './services/login'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const addFormRef = useRef()

  useEffect(() =>{
    console.log("map user")
    const user = window.localStorage.getItem('loggedUser')
    if (user) setUser(JSON.parse(user))
  }, [])

  useEffect(() => {
    console.log("map blogs")
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
      setTimeout(() => {
        setError(null)
      }, 5000)
      }
    }

const handleLogout = () => {
  window.localStorage.removeItem('loggedUser')
  setUser(null)

}

  const blogList = (user) => {
    return (
      <div>
      <br/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      <br/>
      <button onClick={handleLogout}>logout</button>
      </div>
    )
  }
  return (
    <div>
      <Notification errorMessage={error}/>
      {!user && <Togglable buttonLabel="login"><LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        setBlogs={setBlogs}
      /></Togglable>}
      {user && <div><h1>Blogs!</h1> Logged in as {user.name}</div>}
      {user && <Togglable buttonLabel="create" ref={addFormRef}>
        <AddForm
          addFormRef={addFormRef}
          blogs={blogs}
          setBlogs={setBlogs}
          setError={setError}
          user={user}
      /></Togglable>}
      {user && blogList(user)}
    </div>
  )
}

export default App