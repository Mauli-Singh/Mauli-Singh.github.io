// Change heading text on click
document.querySelector('h1').addEventListener('click', function() {
    this.textContent = "Welcome to Mauli Singh's Profile!";
});

// Toggle image on click
document.getElementById('Photo').addEventListener('click', function() {
    if (this.src.includes('my_pic.jpg')) {
        this.src = 'another_pic.jpg';  // Replace with the actual path to the second image
    } else {
        this.src = 'my_pic.jpg';  // Revert back to the original image
    }
});

// Display an alert when clicking on the email or phone number
document.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function() {
        alert("You clicked on: " + this.textContent);
    });
});
