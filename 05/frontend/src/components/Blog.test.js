import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

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