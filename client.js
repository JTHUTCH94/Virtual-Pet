
'use strict';


$(function () {

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();
  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.bath-button').click(clickedBathButton);

});

// Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

let pet_info = {
  'name': 'Sparky',
  'weight': 10,
  'happiness': 10,
  'dirty': false
};

function clickedTreatButton() {
  pet_info['happiness'] = pet_info['happiness'] += 1; // Increase pet happiness
  pet_info['weight'] = pet_info['weight'] += 1; // Increase pet weight
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info['happiness'] = pet_info['happiness'] += 1; // Increase pet happiness
  pet_info['weight'] = pet_info['weight'] -= 1; // Decrease pet weight
  pet_info['dirty'] = true; //Pet is dirty from playing
  $('.head').css('background-color', 'brown');
  $('.butt').css('background-color', 'brown');
  $('.ball').animate({up: '50px', down: '50px'});
}

function clickedExerciseButton() {
  pet_info['happiness'] = pet_info['happiness'] -= 1; // Decrease pet happiness
  pet_info['weight'] = pet_info['weight'] -= 1; // Decrease pet weight
  pet_info['dirty'] = true;
  $('.head').css('background-color', 'brown');
  $('.butt').css('background-color', 'brown'); 
  checkAndUpdatePetInfoInHtml();
}

function clickedBathButton() {
  pet_info['dirty'] = false;
  pet_info['happiness'] = pet_info['happiness'] -= 1;
  $('.head').css('background-color', 'tan');
  $('.butt').css('background-color', 'tan'); 
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.dirty').text(pet_info['dirty']);
}
