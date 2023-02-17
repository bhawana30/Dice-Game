var rNumber1=Math.floor((Math.random()*6) +1);
var rNumber2=Math.floor((Math.random()*6) +1);
var rDiceImage1="images/dice"+rNumber1+".png";
var rDiceImage2="images/dice"+rNumber2+".png";
var im1=document.querySelectorAll(".img1")[0];
var im2=document.querySelectorAll(".img2")[0];
im1.setAttribute("src",rDiceImage1);
im2.setAttribute("src",rDiceImage2);
if(rNumber1>rNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(rNumber1<rNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else
document.querySelector("h1").innerHTML="Draw!";