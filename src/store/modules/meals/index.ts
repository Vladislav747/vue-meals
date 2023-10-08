import state from './state.ts'
import actions from "./actions";
import * as mutations from './mutations.ts'


export default {
    state,
    actions,
    mutations,

    namespaced: true,
};
