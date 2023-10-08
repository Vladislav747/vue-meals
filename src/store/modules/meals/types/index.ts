export interface MealData {
    data: {
        meals: any[]; // Replace 'any' with the actual shape/type of the meal objects if possible
    }
}

export interface Meal {
    // Define properties of a Meal, for example:
    id: string;
    name: string;
    // etc.
}

export interface MealsState {
    searchedMeals: Meal[];
    mealsByLetter: Meal[];
    mealsByIngredient: Meal[];
    meals: Meal[];
    ingredient: string;
}
