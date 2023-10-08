<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <meals-component :meals="meals" />
</template>

<script lang="ts">
import {mapActions, mapState} from 'vuex';
import Meals from '@/components/Meals.vue';
import {
  stateSelectors as mealsState,
} from "@/store/modules/meals/selectors";
import { actionSelectors as mealsActions } from "@/store/modules/meals/selectors";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Home',
  components: {"meals-component": Meals},
  created() {
    this.fetchRandomMeals();
  },

  computed: {
    ...mapState({
      meals: mealsState.MEALS_ITEMS,
    }),
  },

  methods: {
    ...mapActions({
      fetchRandomMeals: mealsActions.FETCH_RANDOM_MEALS,
    }),
  },
});
</script>
