const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('To start the game go to the url http://localhost/intro.')
})


app.get('/intro', (req, res) => {
  res.send('Today is a  wonderful day! You and your sister are going to Paris to visit your relatives. You grab your bags and dump them in the boot of the Uber that is taking you to the airport. You clamber into the backseat with your sister and fall into a light sleep. You are quietly snoring when you hear the tyres skid to a stop. Something in your gut tells you that you are not safe anymore.')
})


app.get('/step1', (req, res) => {
  user = req.query['player']
  res.send('To start game go to the url http://localhost/step2?player={user}. Change user with your user name.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})