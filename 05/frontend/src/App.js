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

const handleLikeCount = (blog) => {
  blog.likes = blog.likes + 1
  blogService.updateLikes(user.token, blog)
  .then(returnedBlog => {
    console.log(returnedBlog)
    const updatedLikes = {
      title: returnedBlog.title,
      url: returnedBlog.url,
      author: returnedBlog.author,
      likes: returnedBlog.likes,
      user: {
      username: user.username,
      name: user.name,
      id: returnedBlog.user
      },
      id: blog.id

    }
    setBlogs(blogs.map(element => element.id !== blog.id ? element :updatedLikes))
  })
  .catch(error => {
    console.log(error)
    setError('Adding like didnt work')
    setTimeout(() => {
      setError(null)
    }, 5000)
    })
  }

  const handleDelete = (blog) => {
    if (window.confirm(`Removing blog ${blog.title} by ${blog.author}`)) {   
    blogService.deleteBlog(user.token, blog)
    .then(returnedMessage => {
      console.log(blogs)
      setBlogs(blogs.filter(element => element.id !== blog.id))
      console.log(blogs)
    })
    .catch(error => {
      setError("removing blog post failed")
      setTimeout(() => {
        setError(null)
      }, 5000)
      })
    }
  }

  const blogList = (user) => {
    const sortedBlogs = blogs.filter(element => element.user).sort((a, b) => (b.likes - a.likes))
    return (
      <div>
        <br/>
        {sortedBlogs.map(blog =>
          <Blog key={blog.id} blog={blog}
            userName={user.name}
            handleLikeCount={handleLikeCount}
            handleDelete={handleDelete} />
        )}
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
      {user && <div><h1>Blogs!</h1> Logged in as {user.name} <button onClick={handleLogout}>logout</button></div>}
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