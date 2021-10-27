const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');


const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//initial setup
score0E1.textContent =0 ;
score1E1.textContent = 0;
diceE1.classList.add('hidden');
let activeplayer = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;

btnRoll.addEventListener('click', () => {
    if (playing) {
        const dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);

        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        } else {
            // player0E1.classList.remove('player--active');
            // player1E1.classList.add('player--active');
            currentScore = 0;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
            activeplayer = activeplayer === 0 ? 1 : 0;
           
            player0E1.classList.toggle('player--active');
            player1E1.classList.toggle('player--active');

        }
    }
    


});
btnHold.addEventListener('click', () => {
    if (playing) {
        scores[activeplayer] += currentScore;
        document.querySelector(`#score--${activeplayer}`).textContent = scores[activeplayer];
        if (scores[activeplayer] >= 25) {
            playing = false;
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            diceE1.classList.add('hidden');
        } else {
            currentScore = 0;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
            activeplayer = activeplayer === 0 ? 1 : 0;
            player1E1.classList.toggle('player--active');
            player0E1.classList.toggle('player--active');
        }
    }

})
