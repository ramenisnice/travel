import { createStore } from "vuex";
import state from "./state.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return state;
  },
  mutations,
  getters,
});

export default store;
