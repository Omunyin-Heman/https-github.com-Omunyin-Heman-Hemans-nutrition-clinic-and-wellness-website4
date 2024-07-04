// JavaScript for accordion functionality
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion-btn");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

// JavaScript for BMI calculator
function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert height to meters
    var bmi = weight / (height * height);
    document.getElementById("result").value = bmi.toFixed(2); // display BMI with two decimal places
}

// JavaScript for contact form submission (dummy alert)
document.getElementById("realContactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission
    // Handle form submission using AJAX or backend processing
    alert("Form submitted successfully!"); // Example alert, replace with actual form processing logic
    this.reset(); // Clear form fields after submission
});