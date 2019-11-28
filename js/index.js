// Referencing the HTML elemnets with JS variables
const timeLimitSelect = document.getElementById('time-limit-select');
const button = document.getElementById('click-button');
const scoreSpan = document.getElementById('score-span');
const moreThanSpan = document.getElementById('more-than-span');
const paritySpan = document.getElementById('parity-span');
const weekdaySpan = document.getElementById('weekday-span');
const starsSpan = document.getElementById('stars-span');
const recordSpan = document.getElementById('record-span');

// Declaring variables that will change
let score;
let timeLimit;
let record;

// Function that tells whether the first number if bigger than the second
// Returns true if bigger and false if not bigger
function moreThan(first, second) {
  return first > second;
}

// Function that tells the parity of a given number
// Returns 'Even' or 'Odd'
function parity(number) {
  if (number % 2 == 0){
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Function that tells the "given number"-th day of the weak
// Returns 'Monday'-'Sunday' or 
// returns 'none' (if the given number if less than 1 or more than 7)
function weekday(number) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  if (number > 0 && number <= 7) {
    return days[number-1];
  } else {
    return 'none';
  }
}

// Does the same as the previous function
// Uses switch cases instead of arrays
// function weekday(number) {
//   switch (number) {
//     case 1: return 'Monday';
//     case 2: return 'Tuesday';
//     case 3: return 'Wednesday';
//     case 4: return 'Thursday';
//     case 5: return 'Friday';
//     case 6: return 'Saturday';
//     case 7: return 'Sunday';
//     default: return 'none';
//   }
// }

// Function that gives as many stars as the given number
// Returns a string of *-s that has exactly "number" number of elemnts
function stars(number) {
  let stars = '';
  for (i = 0; i < number; i++) {
    stars  = stars + '*';
  }
  return stars;
}

// Function that is invoked setting up a new game
// (This will happen when the page is loaded, or the time limitis changed)
// Resets the score to 0
// Updates the "timeLimit" value from the time limit select
// Loads the record for the given time limit form the browser's local storage
// Enables the button
// Updates the score, more than, parity, weekday, stars and record text
function newGame() {
  score = 0;
  timeLimit = timeLimitSelect.value;
  // Reads the 'record' value stored in the browser's local storage
  // 'record'+timeLimit will be 'record10', 'record20' or 'record30'
  record = localStorage.getItem('record' + timeLimit);
  button.disabled = false;
  scoreSpan.innerHTML = score;
  moreThanSpan.innerHTML = moreThan(score, 5);
  paritySpan.innerHTML = parity(score);
  weekdaySpan.innerHTML = weekday(score);
  starsSpan.innerHTML = stars(score);
  recordSpan.innerHTML = record;
}

// Function that is invoked when the game is over
// (This will happen when the time limit is reached)
// If the score is bigger then the previous record,
//   saves the score as new record and updetes the record text
// Disables the clicking button
// Enables the time limit select
function endGame() {
  if (score > record) {
    localStorage.setItem('record' + timeLimit, score);
    recordSpan.innerHTML = localStorage.getItem('record' + timeLimit);
  }
  button.disabled = true;
  timeLimitSelect.disabled = false;
}

// Function that is invoked every time the button is clicked
// This will happen every time the button is clicked
// On the first buttonclick disables the time limit select and creates a timeout
// Increases the score by 1
// Updates the score, more than, parity, weekday and stars text
function handleButtonClick() {
  if (score == 0) {
    timeLimitSelect.disabled = true;
    // Creates a timeout with the "endGame" function and "timeLimit" seconds
    // Imagine this as a timer
    // After "timeLimit" * 1000 milliseconds the "endGame" function will be called
    window.setTimeout(endGame, timeLimit * 1000);
  } 
  score = score + 1;
  scoreSpan.innerHTML = score;
  moreThanSpan.innerHTML = moreThan(score, 5);
  paritySpan.innerHTML = parity(score);
  weekdaySpan.innerHTML = weekday(score);
  starsSpan.innerHTML = stars(score);
}

// Setting HTML element's event handlers
// This tells happens when the button is clicked or
//   the time limit select is changed
button.onclick = handleButtonClick;
timeLimitSelect.onchange = newGame;

// Setting up a new game 
// This happens when the page finished loading
newGame();