const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Person = require('../models/person')

const api = supertest(app)

const initialNotes = [
  {
    name: 'test name 1',
    number: 123123232,
  },
  {
    name: 'test guy 2',
    number: 344324344,
  }
]

beforeEach(async () => {
  await Person.deleteMany({})
  let noteObject = new Person(initialNotes[0])
  await noteObject.save()
  noteObject = new Person(initialNotes[1])
  await noteObject.save()
})

test('persons are returned as json', async () => {
  await api
    .get('/api/persons')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there is right amount of data in api', async () => {
  const response = await api.get('/api/persons')

  expect(response.body).toHaveLength(initialNotes.length)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/persons')
  expect(response.body[0].name).toBe('test name 1')
})

afterAll(async () => {
  await mongoose.connection.close()
})