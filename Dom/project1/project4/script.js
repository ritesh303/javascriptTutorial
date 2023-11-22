let randomNumber=parseInt((Math.random()*100)+1)
const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessField')
const lowOrHigh=document.querySelector('.lowOrHigh')
const guesseSlot=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const startOver=document.querySelector('#resultParas')

const p= document.createElement('p')
let previousGuess=[]
let numGuess=1;
let playGame=true
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess()
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number lesser than 100')
    }
    else{
        previousGuess.push(guess)
        if(numGuess===11){
            displayguess(guess)
            displymessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayguess(guess)
            checkguesses(guess)
        }
    }
}
function checkguesses(guess){
    if (guess===randomNumber){
        displayguess( `you guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayguess( `you guessed too low number`) 
    }
    else if(guess>randomNumber){
        displayguess( `you guessed too High number`) 
    }
}
function displayguess(guess){
    userInput.value=''
    guesseSlot.innerHTML += `${guess}`
    numGuess ++;
    remaining.innerHTML=`{11-numGuess}`
}
function displymessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}
function newGame(){
    let newGame=document.querySelector('#newGame');
    newGame.addEventListener('click',function(e){
        e.preventDefault();
        randomNumber=parseInt((Math.random()*100)+1);
        previousGuess=[];
        numGuess=1;
        guesseSlot.innerHTML=''
        remaining.innerHTML=`{11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()

}