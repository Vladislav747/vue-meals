import { Commit } from 'vuex';

import axiosClient from '@/axiosClient.ts';
import {MealData} from "./types";

export const actions = {
    searchMeals: "searchMeals",
    searchMealsByLetter: "searchMealsByLetter",
    searchMealsByIngredient: "searchMealsByIngredient",
    fetchRandomMeals: "fetchRandomMeals"
}

export default {
    searchMeals({ commit }: {commit: Commit}, keyword: string) {
        if(keyword){
            axiosClient.get(`search.php?s=${keyword}`)
                .then(({ data }: MealData) => {
                    commit('setSearchedMeals', data.meals)
                })
        }else {
            commit("setSearchedMeals", []);
        }

    },
    searchMealsByLetter({ commit }: {commit: Commit}, letter: string) {
        axiosClient.get(`search.php?f=${letter}`)
            .then(({ data }: MealData) => {
                commit('setMealsByLetter', data.meals)
            })
    },
    searchMealsByIngredient({ commit }: {commit: Commit}, ing: string) {
        axiosClient.get(`filter.php?i=${ing}`)
            .then(({ data }: MealData) => {
                commit('setMealsByIngredients', data.meals)
            })
    },
    async fetchRandomMeals({ commit }: {commit: Commit}) {
        for (let i = 0; i < 10; i++) {
            try {
                const { data } = await axiosClient.get('random.php');
                commit("addMeal", data.meals[0]);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
                // Handle error appropriately
            }
        }
    }
}



