var randomNo1=Math.floor(Math.random()*7);
var randomImage="dice"+randomNo1+".png";
var imageSource="images/"+randomImage;
var x =document.querySelectorAll("img")[0];
x.setAttribute("src", imageSource);

var randomNo2=Math.floor(Math.random()*7);
var randomImage2="dice"+randomNo2+".png";
var imageSource="images/"+randomImage2;
var y=document.querySelectorAll("img")[1];
y.setAttribute("src", imageSource);

if (randomNo1>randomNo2){
  document.querySelector("h1").innerHTML = "Player 1 is Winner";
}
else if(randomNo1===randomNo2){
  document.querySelector("h1").innerHTML = "Match Tied";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
