// const headerText = getElementById("#hearderText");
// const animalForm = getElementById("#animalForm");
// const animalInput = getElementById("#animalInput");
// const thankYouMessage = getElementById("#thankYouMessage");
// const animalImage = getElementById("#animalImage");
// const submittedName = getElementById("#submittedName");

// animalForm.addEventListener("submit", handleFormSubmit) {
//     function handleFormSubmit(event) {
//         event.preventDefault()
//     }
// }

// const animalInputLowerCase = animalInput.value.trim().toLowerCase();

// // Objects that maps animal names to their corresponding image paths
// const animalImages = {
//     "panda": "img/panda.jpg", 
//     "penguin": "img/penguin.jpg", 
//     "chameleon": "img/chameleon.jpg",
//     "squirrel": "img/squirrel.jpg", 
//     "cat": "img/cat.jpg", 
//     "flamingo": "img/flamingo.jpg",
//     "deer": "img/deer.jpg",
//     "owl": "img/owl.jpg", 
//     "butterfly": "img/butterfly.jpg", 
//     "horse": "img/horse.jpg" 
// };

// if (animalImages[animalInput]) {
//     displayAnimal(animalInput, animalImages[animalInput]);
// } else {
//     alert("Sorry, we dont have an image for that animal. Try and guess Chameleon, cat, squirrel and some uncommon friendly animals");
// }

// thankYouMessage.classList.remove("hidden");
// animalImage.src = animalImagePath;
// submittedName.textContent = animalName;
// headerText.textContent = "The image of the animal you enter is shown below";

// setTimeout(function() {
//     thankYouMessage.classList.add("hidden");
//     animalForm.classList.remove("hidden");
//     headerText.textContent = "Enter an animal name";
// });