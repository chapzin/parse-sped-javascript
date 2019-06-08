const express = require('express')
const routes = require('./routes')
const { ApolloServer, gql } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./app/graphql/schema')
const mongoose = require('mongoose')
const { mongodb } = require('./config/database')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()
server.applyMiddleware({ app })
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
