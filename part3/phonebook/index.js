const { response, request } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
let persons = require('./persons.json')

const name_is_in_database = (input, database) => {
  temp = database.filter(person => person.name.toLowerCase() === input.toLowerCase())
  if (temp.length > 0) {
    return true
  } else {
    return false
  }
}

app.use(cors())
app.use(express.json())
app.use(morgan('tiny', {skip: (request, response) => request.method === 'POST'}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content', {
  skip: (request, response) => request.method != 'POST'
}))

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>')
})

app.get('/info', (request, response) => {
  const name_count = persons.length
  response.send(`
    <p>Phonebook has info for ${name_count} people</p>
    <p>${Date(Date.now())}</p>
  `)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  if (!request.body.name) {
    morgan.token('content', () => 'Error: Each entry needs a name')
    return response.status(400).json({
      error: 'Each entry needs a name'
    })
  }
  if (!request.body.number) {
    morgan.token('content', () => 'Error: Each entry needs a number')
    return response.status(400).json({
      error: 'Each entry needs a number'
    })
  }
  
  const id = Math.floor(Math.random() * 5000)
  const name = request.body.name
  const number = request.body.number

  if (name_is_in_database(name, persons)) {
    morgan.token('content', () => `Error: ${name} is already in the phonebook!`)
    return response.status(400).json({
      error: `${name} is already in the phonebook!`
    })
  }

  const person = { id, name, number } 
  persons = persons.concat(person)

  response.json(person)

  morgan.token('content', () => JSON.stringify(person))
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3002
// workaround to get VS Code's REST Client to work.
//app.listen(PORT, 'localhost')
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})