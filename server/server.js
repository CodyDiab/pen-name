const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config()


// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { log } = require('console');

const PORT = process.env.PORT || 3001;
const app = express();
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/payment', (req, res) => {
  const {product, token} = req.body
  console.log('PRODUCT', product)
  console.log('PRICE', product.price)
  
  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: 1000,
      currency: 'usd'
    })
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err) )
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
