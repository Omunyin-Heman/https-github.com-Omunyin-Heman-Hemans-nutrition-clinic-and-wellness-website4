// Function to calculate daily calorie needs
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calorie-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseInt(document.getElementById('height').value);
        const activityLevel = document.getElementById('activity-level').value;

        // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Adjust BMR based on activity level
        let activityFactor;
        switch(activityLevel) {
            case 'sedentary':
                activityFactor = 1.2;
                break;
            case 'lightly-active':
                activityFactor = 1.375;
                break;
            case 'moderately-active':
                activityFactor = 1.55;
                break;
            case 'very-active':
                activityFactor = 1.725;
                break;
            case 'extra-active':
                activityFactor = 1.9;
                break;
            default:
                activityFactor = 1.2;
        }

        // Calculate total daily calorie needs
        const calorieNeeds = Math.round(bmr * activityFactor);

        // Display result
        resultDiv.innerHTML = `
            <h2>Your Daily Calorie Needs</h2>
            <p>Based on your input:</p>
            <ul>
                <li>Age: ${age} years</li>
                <li>Gender: ${gender}</li>
                <li>Weight: ${weight} kg</li>
                <li>Height: ${height} cm</li>
                <li>Activity Level: ${activityLevel}</li>
            </ul>
            <p><strong>Total Daily Calorie Needs: ${calorieNeeds} calories/day</strong></p>
        `;
    });
});
