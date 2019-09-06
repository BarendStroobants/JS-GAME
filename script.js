
photoArray = [
    "./assets/img_1.jpg", // = Rock
    "./assets/img_2.jpg", // = Scissors
    "./assets/img_3.jpg" // = Paper
];

var playerChoice;

var computerChoice;

var scoreCountPlayer = 0;

var scoreCountComputer = 0;

var timerCountdown = function () {

    // creates random image
    function randomImg() {
        computerChoice = Math.floor(Math.random() * 3.2);
        document.getElementById("imageComputerChoice").src = photoArray[computerChoice];
        clearInterval(stopRandom);
    }

    var count = 5;

    // countdown + add computers choice
    var stopRandom =
        setInterval(function () {
            if (count === 0) {
                count = 0;
                document.getElementById("choiceVersusWinner").src = "./assets/vs.jpg";
                randomImg();
                document.getElementById("rockButton").disabled = true;
                document.getElementById("paperButton").disabled = true;
                document.getElementById("scissorsButton").disabled = true;
            } else {
                count--;
                //console.log(count);
                document.getElementById("rockButton").disabled = false;
                document.getElementById("paperButton").disabled = false;
                document.getElementById("scissorsButton").disabled = false;
                document.getElementById("counter").innerText = count;
            }
        }, 1000);

    setTimeout(function compareCards() {

        if (count !== 0) {
            return;
        }

        if (playerChoice === 0 && computerChoice === 0){
            document.getElementById("counter").innerText = "It's a tie"

        } else if (playerChoice === 0 && computerChoice === 1){
            scoreCountPlayer++;
            document.getElementById("scorePlayerOne").innerText = scoreCountPlayer;

        } else if (playerChoice === 0 && computerChoice === 2){
            scoreCountComputer++;
            document.getElementById("scoreComputer").innerText = scoreCountComputer;

        } else if (playerChoice === 1 && computerChoice === 0){
            scoreCountComputer++;
            document.getElementById("scoreComputer").innerText = scoreCountComputer;

        } else if (playerChoice === 1 && computerChoice === 1){
            document.getElementById("counter").innerText = "It's a tie"

        } else if (playerChoice === 1 && computerChoice === 2){
            scoreCountPlayer++;
            document.getElementById("scorePlayerOne").innerText = scoreCountPlayer;

        } else if (playerChoice === 2 && computerChoice === 0){
            scoreCountPlayer++;
            document.getElementById("scorePlayerOne").innerText = scoreCountPlayer;

        } else if (playerChoice === 2 && computerChoice === 1){
            scoreCountComputer++;
            document.getElementById("scoreComputer").innerText = scoreCountComputer;

        } else if (playerChoice === 2 && computerChoice === 2) {
            document.getElementById("counter").innerText = "It's a tie"
        } else {
            document.getElementById("counter").innerText = "Time\'s up!"
        }

        console.log(scoreCountPlayer);
        console.log(scoreCountComputer);
    }, 7000);
    //compareCards();
};
// starts countdown
timerCountdown();

const theRockIsBack = document.getElementById("theRockSound");
function playAudioRock() {
    theRockIsBack.play();
}
function pauseAudioRock() {
    theRockIsBack.pause();
}
const edwardSciss = document.getElementById("edwardSound");
function playEdwardSciss() {
    edwardSciss.play();
    }
function pauseAudioEdward() {
    edwardSciss.pause();
}
const theWolfOfWallstreet = document.getElementById("theWolfSound");
function playAudioTheWolf() {
    theWolfOfWallstreet.play();
    }
function pauseAudioTheWolf() {
    theWolfOfWallstreet.pause();
}
const pinkPantherSound = document.getElementById("pinkPantherSound");
function playpinkPantherSound() {
    pinkPantherSound.play();
}
playpinkPantherSound();

document.getElementById("rockButton").addEventListener("click", function (clickTheRock) {

    document.getElementById("imagePlayerChoice").src = photoArray[0];
    playerChoice = 0;
    playAudioRock();
    pauseAudioEdward();
    pauseAudioTheWolf();
});

document.getElementById("scissorsButton").addEventListener("click", function (clickScissors) {

    document.getElementById("imagePlayerChoice").src = photoArray[1];
    playerChoice = 1;
    document.getElementById("edwardSound").play;
    playEdwardSciss();
    pauseAudioRock();
    pauseAudioTheWolf();
});

document.getElementById("paperButton").addEventListener("click", function (clickPaper) {

    document.getElementById("imagePlayerChoice").src = photoArray[2];
    playerChoice = 2;
    document.getElementById("theWolfSound").play;
    playAudioTheWolf();
    pauseAudioRock();
    pauseAudioEdward();
});

document.getElementById("resetButton").addEventListener("click", function () {

    timerCountdown();

    document.getElementById("imagePlayerChoice").src = "./assets/hourglass.jpg";
    document.getElementById("imageComputerChoice").src = "./assets/hourglass.jpg";
    document.getElementById("choiceVersusWinner").src = "./assets/countdown.png";
    playpinkPantherSound();

});

