const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mealsdb = require('./db/meals-index.js')
const mealsRouter = require('./routes/meals-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

mealsdb.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Meals Ready!')
})

app.use('/api', mealsRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
