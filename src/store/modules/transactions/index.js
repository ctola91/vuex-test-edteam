import mutations from "./transactions.mutations";
import actions from "./transactions.actions";
import getters from "./transactions.getters";

const state = () => {
  return {
    all: [],
    transaction: null,
    loading: false,
    error: false,
    message: "",
  };
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
