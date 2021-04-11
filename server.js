const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`

app.get('/', (req, res) => {
  res.send(`To start the game go to the url ${host}/intro.`)
})


app.get('/intro', (req, res) => {
  res.send(`Today is a  wonderful day! You and your sister are going to Paris to visit your relatives. You grab your bags and dump them in the boot of the Uber that is taking you to the airport. You clamber into the backseat with your sister and fall into a light sleep. You are quietly snoring when you hear the tyres skid to a stop. Something in your gut tells you that you are not safe anymore. To continue go to <a href=${host}/step/1>step 1</a>`)
})

app.get('/step/1', (req, res) => {
  let answer = req.query.answer;
  console.log('answer:', answer);
  if (!answer) {
    res.send(`Would you like to choose to wake up and safely escape from the car? <a href=${host}/step/1?answer=yes>Yes</a> or <a href=${host}/step/1?answer=no>No</a>`);
  } else if (answer === 'yes'){
    res.send(`You wind the window down and pull your sister out of the window with you. You spend hours that turn into days searching for your home. You find it eventually but it has a sold out on it. You come to an epiphany. Your parents must have thought you and your sister have died and moved back to Paris. Go back one <a href=${host}/step/1>step</a> to retry.`);
  } else if (answer === 'no') {
    res.send(`Choose to stay in a car. You decided to ignore the skid. It is probably the driver trying to save you from someone ignoring a red light and zooming through. You hear the car park and wake up. “Get inside!” Calls a man’s rough voice. Go to the next <a href=${host}/step/2>step</a>`);
  } else {
    res.send('Not implemented')
  }
})

app.get('/step/2', (req, res) => { 
  let answer = req.query.answer;
  console.log('answer', answer)
  if (!answer) {
    res.send(`Would you like to choose to obey? <a href=${host}/step/2?answer=yes>Yes</a> or <a href=${host}/step/2?answer=no>No</a>`)
  } else if (answer === 'yes'){
    res.send(`You decided to obey and walk inside. The man yells “Sit!” and you and your sister sit down on crates, there are three glasses in front of you. The man asks who is going to drink one of the liquids.You volunteer and carefully examine each glass. One is yellow, another is orange and the the third is green. Go to the next <a href=${host}/step/3>step</a>`)
  } else if (answer === 'no') {
    res.send(`You disobey and try to run but someone shoots you and your sister. You died. Go to the one <a href=${host}/step/2>step</a> back to retry.`)
  } else {
    res.send('Not implemented')
  }
});

app.get('/step/3', (req, res) => { 
  let answer = req.query.answer;
  console.log('answer', answer)
  if (!answer) {
    res.send(`Would you like to choose the glass? <a href=${host}/step/3?answer=yellow>Yellow</a> or <a href=${host}/step/3?answer=orange>Orange</a> or <a href=${host}/step/3?answer=green>Green</a>`)
  } else if (answer === 'yellow'){
    res.send(`You grab the yellow glass and gulp down the drink inside. Your body slumps and you drop to  the floor dead. Go to the one <a href=${host}/step/3>step</a> back to retry.`)
  } else if (answer === 'orange') {
    res.send(`You consume the orange liquid. You must have gotten lucky, it tastes exactly like water. You must be beaming because the man says “If you think you are smart then only one of you can leave. Quick! Make your decision!" Go to the next <a href=${host}/step/4>step</a>`)
  } else if (answer === 'green') {
    res.send(`You begin to feel drowsy and slump over the table. You wake up hours later and man says “You failed. Say hello to death!” And he shoots you in the head. 
    Go to the one <a href=${host}/step/3>step</a> back to retry.`)
  } else {
    res.send('Not implemented')
  }
});

app.get('/step/4', (req, res) => { 
  let answer = req.query.answer;
  console.log('answer', answer)
  if (!answer) {
    res.send(`Would you like to choose to release yourself and leave your sister? <a href=${host}/step/4?answer=yes>Yes</a> or <a href=${host}/step/4?answer=no>No</a>`)
  } else if (answer === 'yes'){
    res.send(`You step out of the building and hear a gun shoot. You leave yourself with nothing and in two weeks you are dead. Go to the one  <a href=${host}/step/4>step</a>  back to retry.`)
  } else if (answer === 'no') {
    res.send(`You insist your sister to  leave. You were put in a cell. But later you notice a window. You climb up, reach the window and haul yourself. You fall down ten meters but you are still alive. You found a phone in your pocket. You turn on google maps and navigate your way home. You reach your home, walk into the living room and see your mom sitting with your sister on the couch. When she sees you she says “Thanks God. I was so worried.” You are happy  to be alive with your family!!!!! Happy End! Go to the  <a href=${host}/intro>Start</a> to play the game again`)
  } else {
    res.send('Not implemented')
  }
});



app.listen(port, () => {
  console.log(`App is listening at ${host}`)
});