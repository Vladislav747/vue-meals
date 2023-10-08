
import {actions} from "./actions.ts";
import {RootState} from "../../types";

const MODULE_NAME = "meals";

export const stateSelectors = {
    MEALS_ITEMS: (state: RootState) => state.meals.meals,
    MEALS_BY_LETTER_ITEMS: (state: RootState) => state.meals.mealsByLetter,
    MEALS_BY_INGREDIENT_ITEMS: (state: RootState) => state.meals.mealsByIngredient,
    SEARCHED_MEALS_ITEMS: (state: RootState) => state.meals.searchedMeals,
    INGREDIENT: (state: RootState) => state.meals.ingredient
};



export const actionSelectors = {
    FETCH_RANDOM_MEALS: `${MODULE_NAME}/${actions.fetchRandomMeals}`,
};


