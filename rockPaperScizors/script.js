console.log('start');

let playerPoints = 0;
let cpuPoints = 0;

let playerScoreText = document.getElementById('playerPoints');
let cpuScoreText = document.getElementById('cpuPoints');
let roundResultText = document.getElementById('roundResult');

addListeners();

const moves = ['pedra', 'papel', 'tesoura'];

function computerPlay(){

    return moves[Math.floor(Math.random()*3)];

}

function playerWinsRound(){

    playerPoints++;

    roundResultText.innerHTML = `Resultado do Round: JOGADOR VENCEU`
    playerScoreText.innerHTML = `Pontos do Jogador: ${playerPoints}`;
    
    if (cpuPoints === 5) {
        alert("Jogador venceu!.");
        location.reload();
    }
}

function cpuWinsRound(){

    cpuPoints++;

    roundResultText.innerHTML = `Resultado do Round: CPU VENCEU`;
    cpuScoreText.innerHTML = `Pontos do CPU: ${cpuPoints}`;

    if (cpuPoints === 5) {
        alert("Computador venceu!.");
        location.reload();
    }
}

function tieRound(){
    roundResultText.innerHTML = `Resultado do Round: EMPATE`;
}

function playRound(playerHand, cpuHand){

    console.log(cpuHand)

    if(playerHand == cpuHand){ 
        tieRound();
        return 'Empate';
    }
    else if(playerHand == 'pedra' && cpuHand == 'tesoura' || playerHand == 'tesoura' && cpuHand == 'papel' || playerHand == 'papel' && cpuHand == 'pedra') {
        playerWinsRound();
        return 'Jogandor venceu';
    }  
    else {
        cpuWinsRound();
        return 'Computador venceu';
    }
        

}

function addListeners(){

    btnPedra.addEventListener('click', function (e) {
        console.log(playRound('pedra', computerPlay()));
    });

    btnTesoura.addEventListener('click', function (e) {
        console.log(playRound('tesoura', computerPlay()));
    });

    btnPapel.addEventListener('click', function (e) {
        console.log(playRound('papel', computerPlay()));
    });

}