import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'

test('renders content', () => {
  
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'test',
    user: {
      name: 'Niilo'
    }
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Component testing is done with react-testing-library', 'test')
  expect(element).toBeDefined()
})

// test('clicking the button calls event handler once', async () => {
//   const blog = {
//     title: 'Component testing is done with react-testing-library',
//     author: 'Niilo',
//     url: 'url',
//     likes: 8,
//     user: {
//       name: 'Niilo'
//     }
//   }

//   const mockHandler = jest.fn()

//   render(
//     <Blog blog={blog} />
//   )

//   // const user = userEvent.setup()
//   // const button = screen.getByText('show')
//   // await user.click(button)

//   const element = screen.getByText('Niilo', 'url')
//   expect(element).toBeDefined()
// })