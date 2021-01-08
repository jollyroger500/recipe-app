const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/meals', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const mealsdb = mongoose.connection

module.exports = mealsdb
