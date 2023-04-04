

let dice = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']



document.querySelector("button").addEventListener("click", function () {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;




    if (randomNumber1 === 1) {
        document.querySelector(".img6").setAttribute("src", dice[0]);
    } else if (randomNumber1 === 2) {
        document.querySelector(".img6").setAttribute("src", dice[1]);
    } else if (randomNumber1 === 3) {
        document.querySelector(".img6").setAttribute("src", dice[2]);
    } else if (randomNumber1 === 4) {
        document.querySelector(".img6").setAttribute("src", dice[3]);
    } else if (randomNumber1 === 5) {
        document.querySelector(".img6").setAttribute("src", dice[4]);
    } else if (randomNumber1 === 6) {
        document.querySelector(".img6").setAttribute("src", dice[5]);
    }

    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", dice[0]);
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", dice[1]);
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", dice[2]);
    } else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", dice[3]);
    } else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", dice[4]);
    } else if (randomNumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", dice[5]);
    }

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }



});