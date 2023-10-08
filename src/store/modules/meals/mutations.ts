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
    state.meals .push(meal);
}

// export const mutations = {
//     setInitialState: "setInitialState",
//     mutate: "mutate",
// };
//
// export default {
//     setInitialState(state: State) {
//         Object.assign(state, initialState());
//
//     },
//     mutate(state: State, payload: any) {
//         console.log(payload, "payload")
//         state[payload.prop] = payload.with;
//     },
// };



