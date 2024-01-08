
var randomNumber =  Math.floor(Math.random()*6 + 1);

var randomDiceImg = "dice" + randomNumber + ".png";

var randomImgSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource);

var randomNumber2 =  Math.floor(Math.random()*6 + 1);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImgSource2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

