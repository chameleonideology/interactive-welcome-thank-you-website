// // document.addEventListener("DOMContentLoaded", function() {

//   document.getElementById("animalForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Get the user's name
//     let animalInput = document.getElementById("animalInput").value.trim().toLowerCase();

//     // Objects that maps animal names to their corresponding image paths
//     const animalImages = {
//         "panda": "img/panda.jpg", 
//         "penguin": "img/penguin.jpg", 
//         "chameleon": "img/chameleon.jpg",
//         "squirrel": "img/squirrel.jpg", 
//         "cat": "img/cat.jpg", 
//         "flamingo": "img/flamingo.jpg",
//         "deer": "img/deer.jpg",
//         "owl": "img/owl.jpg", 
//         "butterfly": "img/butterfly.jpg", 
//         "horse": "img/horse.jpg" 
//     };

//     // Check if the name is empty
//     if (animalImages[animalInput]) {
//         document.getElementById("thankYouMessage").classList.remove("hidden");
//         document.getElementById("animalImage").src = animalImages[animalInput];
//         document.getElementById("submittedName").textContent = animalInput;
//         document.getElementById("animalForm").classList.add("hidden");

//         // change the text of the h1 to show when the animal image appear
//         document.getElementById("headerText").textContent = "The image of the animal you enter is shown below"
//     } else {
//         alert("Sorry, we dont have an imag for that animal. Try Chameleon, cat, squirrel and some uncommon friendly animals");
//     }
//   });
// // });


document.addEventListener("DOMContentLoaded", function() {

const animalForm = document.getElementById("animalForm");
const headerText = document.getElementById("headerText");
const countdownDisplay = document.getElementById("countdown");
const thankYouMessage = document.getElementById("thankYouMessage");
const animalImage = document.getElementById("animalImage");
const submittedName = document.getElementById("submittedName");

animalForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
        event.preventDefault()

const animalInput = document.getElementById ("animalInput").value.trim().toLowerCase();

// Objects that maps animal names to their corresponding image paths
const animalImages = {
    "panda": "img/panda.jpg", 
    "penguin": "img/penguin.jpg", 
    "chameleon": "img/chameleon.jpg",
    "squirrel": "img/squirrel.jpg", 
    "cat": "img/cat.jpg", 
    "flamingo": "img/flamingo.jpg",
    "deer": "img/deer.jpg",
    "owl": "img/owl.jpg", 
    "butterfly": "img/butterfly.jpg", 
    "horse": "img/horse.jpg" 
};

  if (animalImages[animalInput]) {
    displayAnimal(animalInput, animalImages[animalInput]);
  } else {
    alert("Sorry, we dont have an image for that animal. Try and guess Chameleon, cat, squirrel and some uncommon friendly animals");
  }


function displayAnimal(animalName, animalImagePath) {
  thankYouMessage.classList.remove("hidden");
  animalImage.src = animalImagePath;
  submittedName.textContent = animalName;

  headerText.textContent = "The image of the animal you enter is shown below";
  
  // countdown logic
  let timeLeft = 15;
  countdownDisplay.textContent = `Time remaining: ${timeLeft} seconds`;

  // Start the countdown and update the countdown every sec.
  const countdownInterval = setInterval(function () {
    timeLeft--;
    countdownDisplay.textContent = `Time remaining: ${timeLeft} seconds`;
    
    // When time runs out, hide the image and stop the countdown
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      animalImage.style.display = "none";
      countdownDisplay.textContent = "";

      location.reload();
    }
  }, 1000)

setTimeout(function() {
    thankYouMessage.classList.add("hidden");
    animalForm.classList.remove("hidden");
    headerText.textContent = "Enter an animal name";
   }, 15000);
  }
 }
});