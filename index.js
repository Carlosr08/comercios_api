import mongoose from 'mongoose'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { config } from 'dotenv'
import typeDefs from './src/gql/schema.js'
import resolvers from './src/gql/resolvers.js'

config({ path: '.env' })

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Base de datos conectada!')
}).catch(err => {
  console.log('Error en conexion ' + err)
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);