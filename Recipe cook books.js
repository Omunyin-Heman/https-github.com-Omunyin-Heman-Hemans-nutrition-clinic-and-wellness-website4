// Define an array of recipes (simulated data)
let recipes = [
    {
        title: "Grilled Chicken Salad",
        category: "Low-Calorie",
        ingredients: ["Chicken breast", "Mixed greens", "Tomatoes", "Cucumbers", "Olive oil", "Lemon juice"],
        instructions: "1. Grill chicken breast until fully cooked. 2. Toss mixed greens, tomatoes, and cucumbers in a bowl. 3. Slice chicken and add to salad. 4. Drizzle with olive oil and lemon juice. 5. Serve immediately.",
        nutrition: {
            calories: 250,
            protein: 30,
            carbs: 10,
            fats: 12
        }
    },
    {
        title: "Quinoa Black Bean Bowl",
        category: "Vegetarian",
        ingredients: ["Quinoa", "Black beans", "Bell peppers", "Avocado", "Cilantro", "Lime juice"],
        instructions: "1. Cook quinoa according to package instructions. 2. Heat black beans and bell peppers in a pan. 3. Serve quinoa topped with black bean mixture. 4. Garnish with sliced avocado, cilantro, and lime juice.",
        nutrition: {
            calories: 300,
            protein: 15,
            carbs: 45,
            fats: 8
        }
    },
    {
        title: "Keto Chicken Avocado Salad",
        category: "Keto-Friendly",
        ingredients: ["Chicken breast", "Avocado", "Spinach", "Olive oil", "Lemon juice", "Salt", "Pepper"],
        instructions: "1. Grill chicken breast until fully cooked. 2. Slice avocado and place on a bed of spinach. 3. Top with grilled chicken. 4. Drizzle with olive oil and lemon juice. 5. Season with salt and pepper. 6. Serve immediately.",
        nutrition: {
            calories: 280,
            protein: 25,
            carbs: 5,
            fats: 18
        }
    },
    // Add more recipes as needed
];

// Function to display recipes based on filter
function displayRecipes(category) {
    let recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous content

    recipes.forEach(recipe => {
        if (category.toLowerCase() === 'all' || recipe.category.toLowerCase() === category.toLowerCase()) {
            let recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            let title = document.createElement('h2');
            title.textContent = recipe.title;
            recipeCard.appendChild(title);

            let categoryElem = document.createElement('p');
            categoryElem.classList.add('category');
            categoryElem.textContent = `Category: ${recipe.category}`;
            recipeCard.appendChild(categoryElem);

            let ingredients = document.createElement('p');
            ingredients.classList.add('ingredients');
            ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
            recipeCard.appendChild(ingredients);

            let instructions = document.createElement('p');
            instructions.textContent = `Instructions: ${recipe.instructions}`;
            recipeCard.appendChild(instructions);

            let nutrition = document.createElement('p');
            nutrition.classList.add('nutrition');
            nutrition.textContent = `Nutritional Information (per serving): Calories - ${recipe.nutrition.calories}, Protein - ${recipe.nutrition.protein}g, Carbs - ${recipe.nutrition.carbs}g, Fats - ${recipe.nutrition.fats}g`;
            recipeCard.appendChild(nutrition);

            recipeContainer.appendChild(recipeCard);
        }
    });
}

// Event listener for category filter change
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('all'); // Initially display all recipes

    let categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', () => {
        let selectedCategory = categoryFilter.value;
        displayRecipes(selectedCategory);
    });
});
