import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {steps} from './model/steps.js'
import {host, port} from './settings.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('layout', {
    answerText: `To start the game go to <a href='${host}/intro'>Start</a>`
  })
  

})

app.get('/intro', (req, res) => {
  res.render('layout', {
    answerText: `Today is a  wonderful day! You and your sister are going to Paris to visit your relatives. You grab your bags and dump them in the boot of the Uber that is taking you to the airport. You clamber into the backseat with your sister and fall into a light sleep. You are quietly snoring when you hear the tyres skid to a stop. Something in your gut tells you that you are not safe anymore. To continue go to <a href=${host}/step/step1>step1</a>`
  });

})


app.get('/step/:stepId', (req, res) => {

  let stepId = req.params.stepId
  let answer = req.query.answer;
  let step = steps[stepId];
  let answerText = step._default;

  if(answer) {
    answerText = step[answer]
  }

  res.render('layout', {
    answerText: answerText
  });

})

app.listen(port, () => {
  console.log(`App is listening at ${host}`)
});

