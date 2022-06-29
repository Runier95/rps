const one=document.querySelector('#rock');
one.addEventListener('click', ()=>{tally("rock")});

const two=document.querySelector('#paper');
two.addEventListener('click', ()=>{tally("paper")});

const three=document.querySelector('#scissors');
three.addEventListener('click', ()=>{tally("scissors")});

let x=0;
let y=0;
let z=0;

function random() {
    return Math.floor(Math.random()*3);
}

function computerPlay() {
    let r=random()
    if (r===0) {
        return 'Rock'
    } else if (r===1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playerSelection(choice) {
  let lower=choice.toLowerCase()
  if (lower==='rock') {
    return 'Rock'
  } else if (lower==='paper') {
    return 'Paper'
  } else if (lower==='scissors') {
    return 'Scissors'
  } else {
    alert('Rock, Paper, or Scissors not chosen!')
  }
}

function round(choice) {
    let player=playerSelection(choice)
    let pc=computerPlay()
    if (pc===player) {
        return ['tie', pc];
    } else if (player==='Paper' && pc==='Rock') {
        return ['playerwins', pc];
    } else if (player==='Rock' && pc==='Scissors') {
        return ['playerwins', pc];
    } else if (player==='Scissors' && pc==='Paper') {
        return ['playerwins', pc];
    } else {
        return ['pcwins', pc];
    }
}

function tally(choice) {
    const [result, pcchoice]=round(choice)
    if (result==='pcwins') {
        ++y
    } else if (result==="playerwins") {
        ++x
    } else if (result==='tie') {
        ++z
    }
    scoreUpdate(pcchoice)
}
const score=document.querySelector('#score');

const current=document.createElement('div');
current.classList.add('currentScore');
current.textContent="Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z;
score.appendChild(current);

const choice=document.createElement('div');
choice.classList.add('pcchoice');
choice.textContent='Select Rock, Paper, or Scissors!';
score.appendChild(choice);

const winner=document.createElement('div');
winner.classList.add('winner');
winner.textContent=`5 rounds remaining!`;
score.appendChild(winner);

function scoreUpdate(pcchoice) {
    console.log(pcchoice)
    if ((x+y+z)<5) {
        current.textContent="Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z;
        score.appendChild(current);

        choice.textContent=`PC has picked ${pcchoice}!`;
        score.appendChild(choice);

        winner.textContent=`${5-(x+y+z)} rounds remaining!`;
        score.appendChild(winner);
    } else {
        current.textContent="Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z;
        score.appendChild(current);
        
        choice.textContent=`PC has picked ${pcchoice}!`;
        score.appendChild(choice);

        if (x>y) {
            winner.textContent='Player wins!';
        } else if (x<y) {
            winner.textContent='PC wins!';
        } else {
            winner.textContent='Tie!';
        }
        
        score.appendChild(winner);
        x=0
        y=0
        z=0

        }


    }    


//    function game() {
//        x=0
//        y=0
//        z=0
//        for (let i=0; i<5; i++) {
//           tally()
//        }
//        if (x>y) {
//            alert("Player wins!\n"+"Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z)
//        } else if (y>x) {
//            alert("Player loses!\n"+"Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z)
//        } else {alert("Tie!\n"+"Player-"+x+"\n"+"PC-"+y+"\n"+"Ties-"+z)}
//    }