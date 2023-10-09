<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Search for Meals"
        @change="searchMealsChange"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import {computed} from "@vue/reactivity";

import Meals from '@/components/Meals.vue';
import { actionSelectors as mealsActions } from "@/store/modules/meals/selectors";


export default defineComponent({
  name: "MealsByName",
  components: {
    Meals
  },
  setup () {
    const route = useRoute();
    const store = useStore();
    const keyword = ref<string>("");

    onMounted(() => {
      keyword.value = route.params.name as string;
      if (keyword.value) {
        searchMeals(keyword.value);
      }
    });

    const searchMeals = (key: string) => {
      store.dispatch(mealsActions.SEARCH_MEALS, key);
    };

    const searchMealsChange = () => {
      searchMeals(keyword.value);
    };

    const meals = computed(() => store.state.meals.searchedMeals);

    return {
      keyword,
      meals,
      searchMealsChange
    }
  }
});
</script>
