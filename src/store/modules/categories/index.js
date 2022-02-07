import actions from "./categories.actions";
import getters from "./categories.getters";
import mutations from "./categories.mutations";

const state = () => {
  return {
    categories: [],
    loading: false,
    error: false,
    message: "",
    category: null,
  };
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
