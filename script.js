const currScore = document.getElementById('curr-score');
const highScore = document.getElementById('high-score');
const line1 = document.getElementsByClassName('l1')[0];

const resetBTN = document.getElementById('rest-btn');
const submitBTN = document.getElementById('user-submit-btn');

let inputBox = document.getElementById('user-input');
let myNum = randomNumberGenerator(1, 20);

const playReset = new Audio('./audio/reset.mp3');
const playLoose = new Audio('./audio/loose.mp3');
const playRight = new Audio('./audio/right.mp3');
const playWrong = new Audio('./audio/wrong.mp3');

resetBTN.addEventListener('click', function(){
    gameReset();
    playReset.play();
    randomNumberGenerator(1, 20);
});

submitBTN.addEventListener("click", function() {
    if(Number(currScore.innerText) <= 0) {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#C5172E';
        document.getElementById('user-input').style.backgroundColor = '#C5172E';
        playLoose.play();
        window.alert('Better luck next time 👎');
    }
    if(Number(myNum) !== Number(inputBox.value)) {
        playWrong.play();
        document.getElementById('user-input').style.backgroundColor = '#2b2b2b';
        currScore.innerText = Number(currScore.innerText) - 1;
        if(inputBox.value > myNum)
        {
            line1.innerText = '📈 Too high';
        } else if(inputBox.value < myNum) {
            line1.innerText = '📉 Too low';
        }
    } else {
        playRight.play();
        line1.innerText = '🎉 Correct number!';
        document.getElementsByClassName('icn-box')[0].innerText = myNum;
        document.getElementsByTagName('body')[0].style.backgroundColor = '#93BD57';
        document.getElementById('user-input').style.backgroundColor = '#93BD57';
        if(Number(highScore.innerText) < Number(currScore.innerText))
        {
            highScore.innerText = Number(currScore.innerText);
//            gameReset();
//            randomNumberGenerator(1, 20);
        }
    }
});


function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameReset() {
    document.getElementsByClassName('icn-box')[0].innerText = '?';
    document.getElementById('user-input').style.backgroundColor = '#2B2B2B';
    document.getElementsByTagName('body')[0].style.backgroundColor = '#2B2B2B';
    line1.innerText = '💭 Start guessing...';
    currScore.innerText = 20;
    highScore.innerText = 0;
    inputBox.value = 1;
}