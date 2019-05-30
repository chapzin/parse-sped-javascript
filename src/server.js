const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const { mongodb } = require('./config/database')
const expressGraphQl = require('express-graphql')

const app = express()

const database = (uri) => {
  mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
}
database(mongodb.uri)
app.use(express.json())
app.use(routes)

module.exports = app
