const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('To start the game go to the url http://localhost/intro. Change user with your user name.')
})


app.get('/intro', (req, res) => {
  res.send('Today is a day!......')
})


app.get('/step1', (req, res) => {
  user = req.query['player']
  res.send('To start game go to the url http://localhost/step2?player={user}. Change user with your user name.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})