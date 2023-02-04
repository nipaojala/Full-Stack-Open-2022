import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import login from './services/login'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import AddForm from './components/AddForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const [visibility, setVisibility] = useState(false)


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
      {!user && <LoginForm
        setVisibility={setVisibility}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        setBlogs={setBlogs}
        visibility={visibility}
      />}
      {user && <div><h1>Blogs!</h1> Logged in as {user.name}</div>}
      {user && <AddForm 
          blogs={blogs}
          setBlogs={setBlogs}
          setError={setError}
          user={user}
      />}
      {user && blogList(user)}
    </div>
  )
}

export default App