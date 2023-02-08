import { useState } from "react"

const Blog = ({ blog, handleLikeCount, handleDelete }) => {
  const [visibility, setVisibility] = useState(false)

  const hideWhenVisible = { display: visibility ? 'none' : '' }
  const showWhenVisible = { display: visibility ? '' : 'none' }

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  return (
    <div style={blogStyle}>
      <div style = {hideWhenVisible}>
        {blog.title}<br/>
        <button type = 'button' id = 'view-button' onClick = {toggleVisibility}> view </button>
      </div>
      <div style = {showWhenVisible}>
        {blog.title} {blog.author}
        <button type = 'button' onClick = {toggleVisibility}> hide </button>
        <br/>{blog.url}<br/>
        {blog.likes}<button onClick={() => handleLikeCount(blog)}>like</button><br/>
        {blog.user.name}<br/>
        <button onClick={() => handleDelete(blog)}>remove</button><br/>
      </div>
    </div>
  )
}

export default Blog