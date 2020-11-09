/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

const state = {
  dishes: [],
};

const getters = {
  allDishes: (state) => state.dishes,
};

const actions = {
  async fetchDishes({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/dishes',
    );

    commit('setDishes', response.data);
  },
  async addDish({ commit }, dish) {
    const response = await axios.post('http://localhost:3000/dishes', dish);

    commit('newDish', response.data);
    console.log('newDish', response.data);
  },
  async deleteDish({ commit }, id) {
    await axios.delete(`http://localhost:3000/dishes/${id}`);

    commit('removeDish', id);
  },
  //   async filterDishes({ commit }, e) {
  //     // Get selected number
  //     const limit = parseInt(
  //       e.target.options[e.target.options.selectedIndex].innerText, 10,
  //     );

  //     const response = await axios.get(
  //       `http://localhost:3000/dishes?_limit=${limit}`,
  //     );

  //     commit('setDishes', response.data);
  //   },
  //   async updateDish({ commit }, updDish) {
  //     const response = await axios.put(
  //       `http://localhost:3000/dishes/${updDish.id}`,
  //       updDish,
  //     );

  //     console.log(response.data);

  //     commit('updateDish', response.data);
  //   },
};

const mutations = {
  setDishes: (state, dishes) => { (state.dishes = dishes); },
  newDish: (state, dish) => state.dishes.unshift(dish),
  removeDish: (state, id) => {
    (state.dishes = state.dishes.filter((dish) => dish.id !== id));
  },
  //   updateDish: (state, updDish) => {
  //     const index = state.dishes.findIndex((dish) => dish.id === updDish.id);
  //     if (index !== -1) {
  //       state.dishes.splice(index, 1, updDish);
  //     }
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
