import Togglable from "./Togglable"

const Blog = ({blog, userName, handleLikeCount}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
    
  }
  return (
  <div style={blogStyle}>
    {blog.title}
    <Togglable buttonLabel="show">
      {blog.author}<br/>
      {blog.url}<br/>
      {blog.likes}<button onClick={() => handleLikeCount(blog)}>like</button><br/>
      {blog.user.name}<br/>
    </Togglable>
  </div>  
  )
}

export default Blog