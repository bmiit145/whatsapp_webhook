const express = require('express')
const bodyParser= require('body-parser');
const app = express()
const port = 4000
app.bodyParser().json();

app.get('/', (req, res) => res.send('Hello World!'))
// Setup a webhook route
app.use(bodyParser.json())
app.post('/msgwebhook', (req, res) => {
  console.log(req.body) // print all response

  //messageFrom=req.body['data']['from'] // sender number
  //messageMsg=req.body['data']['body'] // Message text
  res.status(200).end()
})

app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))