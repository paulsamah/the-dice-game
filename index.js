
/* Zaruri Coiu */

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);




let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


/* Zaruri Dudu */

let randomNumber3 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage3 = "images/dice" + randomNumber3 + ".png";

let image3 = document.querySelectorAll("img")[2].setAttribute("src", randomDiceImage3);



let randomNumber4 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage4 = "images/dice" + randomNumber4 + ".png";

let image4 = document.querySelectorAll("img")[3].setAttribute("src", randomDiceImage4);



if ((randomNumber1 + randomNumber2) > (randomNumber3 + randomNumber4)) {
    document.querySelector("h1").innerHTML = "Player 1 Wins🙂"
} else if ((randomNumber1 + randomNumber2) < (randomNumber3 + randomNumber4)) {
    document.querySelector("h1").innerHTML = "Player 2 Wins😎"
} else {
    document.querySelector("h1").innerHTML = "Draw😅"
}




