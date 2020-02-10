//to fix easy and hard mood when pushing Playn again it will chose from 3 not 6//
var numSquares = 6;
var colors = generateRandomColors(numSquares);
/*[
	"rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
    ]*/

var squares = document.querySelectorAll(".square");
// hard color and then randomise it//
var pickedColor = pickColor();                 //colors[3]//; 
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//adding new message div//
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
 hardBtn.classList.remove("selected");
 easyBtn.classList.add("selected");
 numSquares = 3;
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
 	if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
 	} else {
 	squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
 	  squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
	//reset all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from areay
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

// here we go with order to change colors on squers//
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares//
	squares[i].style.backgroundColor = colors[i]

//add click listener to squares//
squares[i].addEventListener("click", function(){
//grab color od clicked square
var clickedColor = this.style.backgroundColor;
//compare color to pickedColor
if(clickedColor === pickedColor){
	messageDisplay.textContent = "Correct!";
	resetButton.textContent = "Play Again?";
	changeColors(clickedColor);
	h1.style.backgroundColor = clickedColor;
} else {
	this. style.backgroundColor = "#232323";
	messageDisplay.textContent = "Try Again!";
  }
 });
}

function changeColors(color){
//loop through all squares//
for(var i = 0; i < squares.length; i++){
 //change each color to match given color//
  squares[i].style.backgroundColor = color;
 }
}

function pickColor(){
	// we want number form 1 do 6// math.random gives nr from o do 1//
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
  }

 function generateRandomColors(num){
 	//make an arreay
 	var arr = []
 	//add num random colors to array;
 	for(var i = 0; i < num; i++){
 	//get random color and push into arr	
 	arr.push(randomColor())
 	}
 	//return that array
 	return arr;
 }

 function randomColor(){
 	//pick red form 0-255
 	var r = Math.floor(Math.random() * 256);
 	//pick blue from 0-255
 	var b = Math.floor(Math.random() * 256);
 	//pick green from 0=255
 	var g = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }
