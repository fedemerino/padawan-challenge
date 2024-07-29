import express from "express"
import cors from "cors"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { resolvers } from "./graphql/resolvers.js"
import { typeDefs } from "./graphql/typeDefs.js"

const port = 4000
const app = express()

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await server.start()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use("/graphql", expressMiddleware(server))
  app.use("/", (_, res) => {
    res.send(
      "Welcome to the Task Manager API, visit <a href='/graphql'>/graphql</a> to get started."
    )
  })

  app.listen(port, () => {
    console.log(`Express running on http://localhost:${port}`)
    console.log(`GraphQL running on http://localhost:${port}/graphql`)
  })
}
startServer()
