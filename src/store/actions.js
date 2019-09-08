export default {
    increment({ commit }, count) {
      setTimeout(() => {
        commit("increment", count);
      }, 1000);
    }
  };