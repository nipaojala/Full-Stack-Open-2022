import { useState } from "react"
import blogService from "../services/blogService"

const AddForm = (props) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')

  const createBlog = (event) => {
    event.preventDefault()
    const newBlogObj = {
      title: title,
      url: url,
      author: author
    }
    blogService.create(newBlogObj, props.user.token)
    .then(returnedBlog => {
      props.setBlogs(props.blogs.concat(returnedBlog))
      setAuthor('')
      setTitle('')
      setUrl('')
      props.setError("adding blog was succesful")
      setTimeout(() => {
        props.setError(null)
      }, 5000)
    })
    .catch(exception => {
      props.setError('something happened')
      setTimeout(() => {
        props.setError(null)
      }, 5000)
    })
  }

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
export default AddForm