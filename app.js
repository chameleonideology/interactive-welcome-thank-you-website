document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's name
    const nameInput = document.getElementById("nameInput").value.trim();

    // Check if the name is empty
    if (nameInput !== "") {
        // Display thank-you message
        document.getElementById("thankYouMessage").classList.remove("hidden");
        document.getElementById("submittedName").textContent = nameInput;

        // Hide the form
        document.getElementById("nameForm").classList.add("hidden");
    } else {
        alert("Please enter your name.");
    }
});