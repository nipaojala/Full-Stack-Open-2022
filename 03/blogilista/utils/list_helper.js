const dummy = (blogs) => {
  if (blogs) return 1
  else return null
}
const totalLikes = (blogs) => {
  let count = 0
  blogs.forEach(element => {
    count = count + element.likes
  })
  return count
}
module.exports = {
  dummy, totalLikes
}