import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'

describe('BlogPosts Component', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Niilo',
    url: 'url',
    likes: 8,
    user: {
      name: 'Niilo'
    }
  }

  const user2 = {
    name: 'Niilo'
  }

  const handleLikeCount = jest.fn().mockName('handleLikeCount')
  const handleDelete = jest.fn().mockName('handleDelete')

  test('renders content', () => {

    render(<Blog blog={blog} />)

    const element = screen.getByText('Component testing is done with react-testing-library')
    expect(element).toBeDefined()
  })

  test('clicking the button calls event handler once', async () => {
    const { container } = render(<Blog blog={blog}
      userName={user2.name}
      handleLikeCount={handleLikeCount}
      handleDelete={handleDelete}/>)

    const user = userEvent.setup()
    const button = screen.getByText('view')
    await user.click(button)

    expect(container).toHaveTextContent('url')
  })
})