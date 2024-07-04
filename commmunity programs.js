// Define an array of community programs (simulated data)
let communityPrograms = [
    {
        title: "Nutrition Education Workshops",
        date: "Monthly",
        description: "Monthly workshops covering various nutrition topics such as healthy eating habits, meal planning, and understanding food labels.",
        audience: "Open to all community members",
        contact: "Contact clinic for registration details"
    },
    {
        title: "Cooking Classes",
        date: "Bi-weekly",
        description: "Hands-on cooking classes focusing on preparing nutritious and balanced meals. Includes recipes and tips for healthy cooking.",
        audience: "Open to individuals and families",
        contact: "Register online or call clinic for schedule"
    },
    {
        title: "Weight Management Support Group",
        date: "Weekly",
        description: "Support group sessions aimed at individuals interested in achieving and maintaining a healthy weight through nutrition and lifestyle changes.",
        audience: "Open to individuals struggling with weight management",
        contact: "Join anytime; no registration required"
    },
    // Add more programs as needed
];

// Function to display community programs
function displayPrograms() {
    console.log("Displaying programs...");

    let programsContainer = document.getElementById('programs-container');
    console.log("Programs container:", programsContainer); // Check if programsContainer is null or correctly selected

    programsContainer.innerHTML = ''; // Clear previous content

    communityPrograms.forEach(program => {
        let programCard = document.createElement('div');
        programCard.classList.add('program-card');

        let title = document.createElement('h2');
        title.textContent = program.title;
        programCard.appendChild(title);

        let date = document.createElement('p');
        date.textContent = `Date: ${program.date}`;
        programCard.appendChild(date);

        let description = document.createElement('p');
        description.classList.add('description');
        description.textContent = program.description;
        programCard.appendChild(description);

        let audience = document.createElement('p');
        audience.textContent = `Audience: ${program.audience}`;
        programCard.appendChild(audience);

        let contact = document.createElement('p');
        contact.textContent = `Contact: ${program.contact}`;
        programCard.appendChild(contact);

        programsContainer.appendChild(programCard);
    });
}

// Call displayPrograms function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded.");

    // Call displayPrograms function to populate programs
    displayPrograms();
});

