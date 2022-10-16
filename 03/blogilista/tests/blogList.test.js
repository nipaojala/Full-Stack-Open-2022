const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

test('dummy returns one', () => {
  const allBlogs = Blog
    .find({})

  const result = listHelper.dummy(allBlogs)
  expect(result).toBe(1)
})