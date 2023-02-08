import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddForm from './AddForm'
import userEvent from '@testing-library/user-event'

test('<AddForm /> updates parent state and calls onSubmit', async () => {
  const user = userEvent.setup()
  const createBlog = jest.fn()

  const { container } = render(<AddForm createBlog={createBlog} />)

  const title = container.querySelector("input[name='Title']");
  const author = container.querySelector("input[name='Author']");
  const url = container.querySelector("input[name='Url']");
  const sendButton = screen.getByText('create')

  await user.type(title, "testing a form...");
  await user.type(author, "author");
  await user.type(url, "url");
  await user.click(sendButton)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe('testing a form...')
})