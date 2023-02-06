import axios from 'axios'
const baseUrl = '/api/blogs'

const setToken = newToken => {
  return `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (data, token) => {
  const config = {
    headers: { Authorization: setToken(token)},
  }
  console.log(data, config)
  const request = await axios.post(baseUrl, data, config)
  return request.data
}

const updateLikes = async ( token, newBlog) => {
  const config = {
    headers: { Authorization: setToken(token)},
  }
  const data = {
    user: newBlog.user.id,
    likes: newBlog.likes,
    author: newBlog.author,
    title: newBlog.title,
    url: newBlog.url
  }
  const request = await axios.put(baseUrl + '/' + newBlog.id, data, config)
  return request.data
}

const deleteBlog = async (token, blog) => {
    const config = {
      headers: {Authorization: setToken(token)}
    }
    const request = await axios.delete(baseUrl + '/' + blog.id, config)
    return request.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken, updateLikes, deleteBlog }