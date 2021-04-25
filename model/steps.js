
import {host} from '../settings.js'

{
  "_id" : ObjectId("608236a585de71b6a46d5f91"),
  "name" : "step1",
  "answers" : {
      "_default" : "Would you like to choose to wake up and safely escape from the car? <a href=<%- host %>/step/step1?answer=yes>Yes</a> or <a href=<%- host %>/step/step1?answer=no>No</a>",
      "yes" : "You wind the window down and pull your sister out of the window with you. You spend hours that turn into days searching for your home. You find it eventually but it has a sold out sign on it. You come to an epiphany. Your parents must have thought you and your sister have died and moved back home. Go back one <a href=<%- host %>/step/step1>step</a> to retry.",
      "no" : "Choose to stay in a car. You decided to ignore the skid. It is probably the driver trying to save you from someone ignoring a red light and zooming through. You hear the car park and wake up. “Get inside!” Calls a man’s rough voice. Go to the next <a href=<%- host %>/step/step2>step</a>"
  }
}
