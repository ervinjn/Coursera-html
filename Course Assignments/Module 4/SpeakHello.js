// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
//When index.html loads this script, it will execute, and immediately invoke the code. 


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
/* The trouble is that speakWord is defined in the global scope,and so will be
overwritten when speakGoodbye is run.  To prevent this, we wrap the whole thing in
an immediately evoked function.  That changes the scope of the speakWord variable 
from global to local, so that it ceases to exist after the function has run. */

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// This is necessary, because helloSpeaker now only exists inside this IIEE that we've created.
// Once we exit, it ceases to exist.


(function(window) {
  var helloSpeaker = {};  // object where we will store our function.
  var speakWord = "Hello";  // this variable will only exist inside this function.
  helloSpeaker.speak = function(name){  // storing the speak function has a method of the helloSpeaker object
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker; // attaching helloSpeaker object to the window object so that it is available in the global scope.
})(window);