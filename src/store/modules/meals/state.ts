export const stateProps = {
    searchedMeals: "searchedMeals",
    mealsByLetter: "mealsByLetter",
    mealsByIngredient: "mealsByIngredient",
    ingredient: "ingredient",
    meals: "meals",
};



export default () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {},
    meals: [],
});
