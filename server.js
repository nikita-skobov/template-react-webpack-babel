const express        = require('express')
const app            = express()
const helmet         = require('helmet')
const server         = require('http').createServer(app)
const port           = 8082 //change this as needed

app.use(express.json())
app.use(helmet())

server.listen(port, () => {
  console.log('listening on port:', port)
})
