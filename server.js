import express from 'express';
import path from 'path';
import {db} from './model/db.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {steps} from './model/steps.js';
import {host, port} from './settings.js';

import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('layout', {
    answerText: '<div><form action="/intro"><label for="name">To start the game please enter your name:</label><br><input type="text" id="name" name="name"><br><input type="submit" value="Submit"></form></div>'
  })
})

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/intro', async (req, res) => {
  let name = req.query.name;

  if(name) {
    let record = {
      name: name
    };
  
    await db.collection('users').insertOne(record);

    let dbRes = await db.collection("users").findOne({name:name});

    res.render('layout', {
      answerText: `Hello ${dbRes.name}. Today is a  wonderful day! You and your sister are going to Paris to visit your relatives. You grab your bags and dump them in the boot of the Uber that is taking you to the airport. You clamber into the backseat with your sister and fall into a light sleep. You are quietly snoring when you hear the tyres skid to a stop. Something in your gut tells you that you are not safe anymore. To continue go to <a href=${host}/step/step1>step1</a>`
    });
  } else {
    res.redirect('/')
  }
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

