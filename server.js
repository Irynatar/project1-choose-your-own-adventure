import {steps} from './model/steps.js'
import {host, port} from './settings.js'

import express from 'express';
import path from 'path';

const app = express()

app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send(`To start the game go to the url ${host}/intro.`)
//   res.sendFile(path.join(__dirname, './index.html'))
// })

app.get('/intro', (req, res) => {
  res.send(`Today is a  wonderful day! You and your sister are going to Paris to visit your relatives. You grab your bags and dump them in the boot of the Uber that is taking you to the airport. You clamber into the backseat with your sister and fall into a light sleep. You are quietly snoring when you hear the tyres skid to a stop. Something in your gut tells you that you are not safe anymore. To continue go to <a href=${host}/step/step1>step 1</a>`)
})

app.get('/step/:stepId', (req, res) => {

  let stepId = req.params.stepId
  let answer = req.query.answer;
  let step = steps[stepId]
  if (!answer) {
    res.send(step._default)
  } else {
    let answerText = step[answer]
    res.send(answerText)
  }
})

app.listen(port, () => {
  console.log(`App is listening at ${host}`)
});

