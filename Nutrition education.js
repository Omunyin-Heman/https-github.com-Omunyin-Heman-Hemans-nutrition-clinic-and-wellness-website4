document.addEventListener('DOMContentLoaded', function() {
    const topics = [
        "Basic Nutrition Principles",
        "Healthy Eating Guidelines",
        "Nutrition for Specific Health Conditions",
        "Reading Food Labels",
        "Eating Disorders and Emotional Eating",
        "Nutrition Across the Lifespan",
        "Sports Nutrition",
        "Food Allergies and Intolerances",
        "Cooking and Meal Preparation"
    ];

    const visualAids = [
        "Food Pyramid or Plate",
        "Portion Size Visuals",
        "Nutrition Label Examples",
        "Meal Planning Charts",
        "Healthy Recipe Cards",
        "Charts for Specific Conditions",
        "Interactive Tools",
        "Before-and-After Health Outcomes",
        "Digestive System Diagram",
        "Interactive Cooking Demonstrations"
    ];

    const topicsList = document.getElementById('topics-list');
    topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        topicsList.appendChild(li);
    });

    const visualAidsList = document.getElementById('visual-aids-list');
    visualAids.forEach(aid => {
        const div = document.createElement('div');
        div.textContent = aid;
        visualAidsList.appendChild(div);
    });
});


