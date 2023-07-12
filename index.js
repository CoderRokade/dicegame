var randomnumber1 = Math.floor(Math.random()*6+1);
var randomnumber2 = Math.floor(Math.random()*6+1);

var randomdice = "dice"+randomnumber1+".png";
var randomdice2 = "dice"+randomnumber2+".png";

// console.log(randomnumber1);

var image1  = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdice);
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if(randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML = "🚩 player 1 win ";
}
else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "player 2 win 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Match draw ";
}