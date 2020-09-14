const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key')

const bodyParser = require('body-parser')
const { USER } = require('./models/User')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// ------- this is for MongoDB connection --------
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(console.log('MongoDB Connect...'))
    .catch((err) => console.log(err))

// -----------------------------------------------


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})