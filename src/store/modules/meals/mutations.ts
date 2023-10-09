import {Meal, MealsState} from "./types";

export function setSearchedMeals(state: MealsState, meals: Meal[]) {
    state.searchedMeals = meals || []
}
export function setMealsByLetter(state: MealsState, meals: Meal[]) {
    state.mealsByLetter = meals || []
}
export function setMealsByIngredients(state: MealsState, meals: Meal[]) {
    state.mealsByIngredient = meals || []
}
export function setIngredient(state: MealsState, ingredient: string) {
    state.ingredient = ingredient
}

export function addMeal(state: MealsState, meal: Meal) {
    state.meals.push(meal);
}

export function setMeals(state: MealsState,  meals: Meal[]) {
    state.meals = meals
}


