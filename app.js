// document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("animalForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's name
    let animalInput = document.getElementById("animalInput").value.trim().toLowerCase();

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

    // Check if the name is empty
    if (animalImages[animalInput]) {
        document.getElementById("thankYouMessage").classList.remove("hidden");
        document.getElementById("animalImage").src = animalImages[animalInput];
        document.getElementById("submittedName").textContent = animalInput;
        document.getElementById("animalForm").classList.add("hidden");

        // change the text of the h1 to show when the animal image appear
        document.getElementById("headerText").textContent = "The image of the animal you enter is shown below"
    } else {
        alert("Sorry, we dont have an imag for that animal. Try Chameleon, cat, squirrel and some uncommon friendly animals");
    }
  });
// });