export default {
  changeCity(state, payload) {
    try {
      localStorage.city = payload;
    } catch (e) {
      console.log(e);
    }
    state.city = payload;
  },
};
