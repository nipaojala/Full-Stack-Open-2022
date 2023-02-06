import Togglable from "./Togglable"

const Blog = ({blog, handleLikeCount, handleDelete}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    
  }
  return (
  <div style={blogStyle}>
    {blog.title}
    <Togglable buttonLabel="show">
      {blog.author}<br/>
      {blog.url}<br/>
      {blog.likes}<button onClick={() => handleLikeCount(blog)}>like</button><br/>
      {blog.user.name}<br/>
      <button onClick={() => handleDelete(blog)}>remove</button><br/>
    </Togglable>
  </div>  
  )
}

export default Blog