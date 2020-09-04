import stocks from "../../data/stocks";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    let foo = state;
    console.log(foo);
  },
};

const actions = {
  buyStock: ({ commit }, order) => {
    let foo = order;
    console.log(foo);
    commit();
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  },
};

const getters = {
  stocks: (state) => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
