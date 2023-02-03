import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogService'
import login from './services/login'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')


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


const createBlog = (event) => {
  event.preventDefault()
  const newBlogObj = {
    title: title,
    url: url,
    author: author
  }
  blogService.create(newBlogObj, user.token)
  .then(returnedBlog => {
    setBlogs(blogs.concat(returnedBlog))
    setAuthor('')
    setTitle('')
    setUrl('')
    setError("adding blog was succesful")
    setTimeout(() => {
      setError(null)
    }, 5000)
  })
  .catch(exception => {
    setError('something happened')
    setTimeout(() => {
      setError(null)
    }, 5000)
  })
}

  const addForm = () => {
    return (
      <div>
        <h2>Add blog</h2>
        <form onSubmit={createBlog}>
          <div>
            Title
            <input type="text" name={"Title"} value={title} onChange={({target}) => setTitle(target.value)}></input>
          </div>
          <div>
            Url
            <input type="text" name={"Url"} value={url} onChange={({target}) => setUrl(target.value)}></input>
          </div>
          <div>
            Author
            <input type="text" name={"Author"} value={author} onChange={({target}) => setAuthor(target.value)}></input>
          </div>
          <button type="submit">Add blog</button>
        </form>
      </div>
    )
  }

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

      {!user && loginForm()}
      {user && <div><h1>Blogs!</h1> Logged in as {user.name} {addForm()}</div>}
      {user && blogList(user)}
    </div>
  )
}

export default App