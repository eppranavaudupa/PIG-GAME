const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceEl = document.querySelector(".dice");
const btnnew = document.querySelector(".btnnew");
const btnroll = document.querySelector(".btnroll");
const btnhold = document.querySelector(".btnhold");
const player1el=document.querySelector('.player--0')
const player2el=document.querySelector('.player--1')
const container=document.querySelector('.player')
diceEl.classList.add('hidden')
score0El.textContent = 0;
score1El.textContent = 0;
const scores = [0,0];
let currentscore = 0;
let activeplayer = 0;
// diceEl.classList.add("hidden");
// Function to update the current score for the current player
function updateCurrentScore() {
  document.getElementById(`current--${activeplayer}`).textContent = currentscore;
}

//rolling dice functionality
btnroll.addEventListener('click', function () {
  console.log(`hello`)
  // 1. Generating random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Displaying dice//changing image 1-6
  diceEl.classList.remove('hidden')
  diceEl.src = `./media/dice ${dice}.png`;
  // console.log(dice)
  // 3. Check for dice rolled
  if (dice !== 1) {
    // Add dice to current score
    currentscore += dice;
    updateCurrentScore();
  } else {
    // Move to 2nd player and reset current score
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    updateCurrentScore();
    activeplayer = activeplayer === 0 ? 1 : 0;
    player2el.classList.toggle('player--active')    
    player1el.classList.toggle('player--active')
  } 
})
// container.classList.toggle('player--winner');
btnhold.addEventListener('click',function(){
  //1.add current score to the players score
  console.log(`hold btn clicked`)
  scores[activeplayer]=scores[activeplayer]+currentscore
  score0El.textContent=scores[0];
  document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
  
  // 2.check if the player score is >=100 then finish the game
  if(scores[activeplayer]>=20){
    // document.querySelector(`.player${activeplayer}`)
    // .classList.add('player--winner');
    // document.querySelector(`.player${activeplayer}`)
    // .classList.remove('player--active');

    // document.querySelector(`.player${activeplayer}`).classList.add('player--winner');
    console.log(`thisplayer${activeplayer} is winned`)
  }
  //3. switching the player
  else{
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    updateCurrentScore();
    activeplayer = activeplayer === 0 ? 1 : 0;
  }
});
