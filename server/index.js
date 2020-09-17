const express = require('express')
const app = express()
const port = 5000
const axios = require('axios');

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

// -----Register--------

axios.post('/api/users/register',(req,res) => {
    const user = new USER(req.body)

    user.save((err) => {
        if(err) return res.status(400).json({success: false, err})

        return res.status(200).json({
            success: true
        })       
    })
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})