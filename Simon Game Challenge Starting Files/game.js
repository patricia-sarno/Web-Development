var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
  //picking a random colour
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //flashing the color pushed to gamePattern
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //playing audio of the color pushed to the gamePattern
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
