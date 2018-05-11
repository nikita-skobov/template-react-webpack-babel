const express        = require('express')
const app            = express()
const helmet         = require('helmet')
const server         = require('http').createServer(app)
const port           = 8082 //change this as needed

app.use(express.json())
app.use(helmet())
app.use("/test1/static", express.static(__dirname + '/dist'))
// test1 is the path in nginx that routes to port 8082. for other projects, test1 is not necessary.

server.listen(port, () => {
  console.log('listening on port:', port)
})

app.get('/test1', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})
