const express = require('express')
const path = require('path')
const collection = require('./config')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.get('/create', (req, res) => {
  res.render('create')
})
// app.get('/home', (req, res) => {
//   res.render('home')
// })

app.post('/create', async (req, res) => {

  const data = {
    name: req.body.username
  }

  const existingUser = await collection.findOne({ name: data.name })

  if (existingUser) {
    res.send('<h1>User already exists. Please choose a different username</h1>')
  } else {
    const userdata = await collection.create(data)
    console.log(userdata)
    res.render('home', { userdata })
  }
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})