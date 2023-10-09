import { Commit } from "vuex";

import axiosClient from "@/axiosClient.ts";
import { MealData } from "./types";

export const actions = {
  searchMeals: "searchMeals",
  searchMealsByLetter: "searchMealsByLetter",
  searchMealsByIngredient: "searchMealsByIngredient",
  fetchRandomMeals: "fetchRandomMeals",
};

export default {
  searchMeals({ commit }: { commit: Commit }, keyword: string) {
    try {
      if (keyword) {
        axiosClient
          .get(`search.php?s=${keyword}`)
          .then(({ data }: MealData) => {
            commit("setSearchedMeals", data.meals);
          });
      } else {
        commit("setSearchedMeals", []);
      }
    } catch (error) {
      console.error("An error occurred while fetching searchMeals:", error);
    }
  },
  searchMealsByLetter({ commit }: { commit: Commit }, letter: string) {
    try {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }: MealData) => {
        commit("setMealsByLetter", data.meals);
      });
    } catch (error) {
      console.error(
        "An error occurred while fetching searchMealsByLetter:",
        error,
      );
    }
  },
  searchMealsByIngredient({ commit }: { commit: Commit }, ing: string) {
    try {
      axiosClient.get(`filter.php?i=${ing}`).then(({ data }: MealData) => {
        commit("setMealsByIngredients", data.meals);
      });
    } catch (error) {
      console.error(
        "An error occurred while fetching searchMealsByIngredient:",
        error,
      );
    }
  },
  async fetchRandomMeals({ commit }: { commit: Commit }) {
    try {
      for (let i = 0; i < 10; i++) {
        const { data } = await axiosClient.get("random.php");
        commit("addMeal", data.meals[0]);
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching fetchRandomMeals:",
        error,
      );
    }
  },
};
