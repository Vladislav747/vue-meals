import {createStore} from "vuex";

import mealsModule from "./modules/meals";


export default createStore({
    modules: {
        meals: mealsModule,
    },
})
