
import {host} from '../settings.js'

const steps = {
    'step1': {
      '_default': `Would you like to choose to wake up and safely escape from the car? <a href=${host}/step/step1?answer=yes>Yes</a> or <a href=${host}/step/step1?answer=no>No</a>`,
      'yes': `You wind the window down and pull your sister out of the window with you. You spend hours that turn into days searching for your home. You find it eventually but it has a sold out sign on it. You come to an epiphany. Your parents must have thought you and your sister have died and moved back home. Go back one <a href=${host}/step/step1>step</a> to retry.`,
      'no': `Choose to stay in a car. You decided to ignore the skid. It is probably the driver trying to save you from someone ignoring a red light and zooming through. You hear the car park and wake up. “Get inside!” Calls a man’s rough voice. Go to the next <a href=${host}/step/step2>step</a>`
    },
    'step2': {
      '_default': `Would you like to choose to obey? <a href=${host}/step/step2?answer=yes>Yes</a> or <a href=${host}/step/step2?answer=no>No</a>`,
      'yes': `You decided to obey and walk inside. The man yells “Sit!” and you and your sister sit down on crates, there are three glasses in front of you. The man asks who is going to drink one of the liquids.You volunteer and carefully examine each glass. One is yellow, another is orange and the the third is green. Go to the next <a href=${host}/step/step3>step</a>`,
      'no': `You disobey and try to run but someone shoots you and your sister. Both of you died. Go to the one <a href=${host}/step/step2>step</a> back to retry.`
    },
    'step3': {
      '_default': `Would you like to choose the glass? <a href=${host}/step/step3?answer=yellow>Yellow</a> or <a href=${host}/step/step3?answer=orange>Orange</a> or <a href=${host}/step/step3?answer=green>Green</a>`,
      'yellow': `You grab the yellow glass and gulp down the drink inside. Your body slumps and you drop to  the floor dead. Go to the one <a href=${host}/step/step3>step</a> back to retry.`,
      'orange': `You consume the orange liquid. You must have gotten lucky, it tastes exactly like water. You must be beaming because the man says “If you think you are smart then only one of you can leave. Quick! Make your decision!" Go to the next <a href=${host}/step/step4>step</a>`,
      'green': `You begin to feel drowsy and slump over the table. You wake up hours later and man says “You failed. Say hello to death!” And he shoots you in the head. Go to the one <a href=${host}/step/step3>step</a> back to retry.`
    },
    'step4': {
      '_default': `Would you like to choose to release yourself and leave your sister? <a href=${host}/step/step4?answer=yes>Yes</a> or <a href=${host}/step/step4?answer=no>No</a>`,
      'yes': `You say "I'm going". You step out of the building and hear a gun shoot. You leave yourself with nothing and in two weeks you are dead. Go to the one  <a href=${host}/step/step4>step</a>  back to retry.`,
      'no': `You insist your sister to  leave. You can see tears in her eyes as she whispers thank you and hugs you. You are put in a cell and later  that night you notice a window. You climb up the stone which is arranged messily. You reach the window which surprisingly has no glass and haul yourself outside. You fall down ten meters and feel as if you have broken your leg.You trudge along for a couple of kilometers and hear "Beep, beep". You reach into your pocket and realize that you have had your phone  the whole time. You turn on google maps and navigate your way home. You reach your home and fumble with the key as you let yourself in. You walk into the living room and see your mom sitting with your sister on the couch. When she sees you she says “Thanks God. I was so worried.” You hug her and hug her until you have nothing left. She sees your leg and ask what is happened? She exclaims. You explain what happened. You are just glad and happy to got home alive and be with your family!!!!! Did your survive? Congratulations! Happy End! Go to the  <a href=${host}/intro>Start</a> to play the game again`
    }
  }

  export { steps };