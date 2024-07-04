// Function to handle click events on team members
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    const memberDetails = document.getElementById('member-details');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.getAttribute('data-name');
            const position = member.getAttribute('data-position');
            const expertise = member.getAttribute('data-expertise');

            memberDetails.innerHTML = `
                <h2>${name}</h2>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Expertise:</strong> ${expertise}</p>
                <p>Bio: our expert team at hemans Nutrition and wellness clinic that guarantees your wellness.</p>
            `;
        });
    });
});