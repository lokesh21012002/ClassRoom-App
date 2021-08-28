const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const UserRoute = require('./Route/userRoute')
app.use(express.json())
mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.urur3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(res => { console.log("Connected to DB") })
app.use('/api/user', UserRoute)
app.listen(5000, () => { console.log('Server Started...') })