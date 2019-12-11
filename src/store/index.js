/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    searchText: state => {
      return state.searchText === null ? "" : state.searchText;
    }
  },
  state: {
    healthLabelColors: {
      "balanced": ["#247BA0", "white"],
      "high-fiber": ["#70C1B3", "white"],
      "high-protein": ["#70C1B3", "white"],
      "low-carb": ["#F0A6CA", "white"],
      "low-fat": ["#F0A6CA", "white"],
      "low-sodium": ["#F0A6CA", "white"],
      "low-sugar": ["#dfd6d1", "black"],
      "sugar-conscious": ["#dfd6d1", "black"],
      "alcohol": ["#9C89B8", "white"],
      "alcohol-cocktail": ["#9C89B8", "white"],
      "alcohol-free": ["#9C89B8", "white"],
      "celery-fre": ["#003049", "white"],
      "crustacean-free": ["#003049", "white"],
      "mustard-free": ["#ff1189", "white"],
      "lupine-free": ["#ff1189", "white"],
      "fodmap-free": ["#EAE2B7", "black"],
      "gluten-free": ["#EAE2B7", "black"],
      "keto-friendly": ["#FDE74C", "black"],
      "paleo": ["#FDE74C", "black"],
      "kidney-friendly": ["#D62828", "white"],
      "kosher": ["#D62828", "white"],
      "low-potassium": ["#D62828", "white"],
      "low-fat-abs": ["#9A8C98", "white"],
      "no-oil-added": ["#9A8C98", "white"],
      "peanut-free": ["#b94d2f", "white"],
      "tree-nut-free": ["#9df2ff", "black"],
      "sesame-free": ["#363654", "white"],
      "wheat-free": ["#fff", "black"],
      "soy-free": ["#fff", "black"],
      "dairy-free": ["#F77F00", "white"],
      "egg-free": ["#F77F00", "white"],
      "pork-free": ["#FCBF49", "black"],
      "red-meat-free": ["#FCBF49", "black"],
      "fish-free": ["#5BC0EB", "white"],
      "pecatarian": ["#5BC0EB", "white"],
      "shellfish-free": ["#5BC0EB", "white"],
      "vegan": ["#9BC53D", "black"],
      "vegetarian": ["#00850f", "white"]
    },
    recipeSearchText: null,
    apiURL: "https://api.edamam.com/search?q=",
    appID: "a5c01004",
    appKey: "69b24a1f18ca44d1d30ad1227b1e9a82",
    maxNumResults: 20,
    searchAPI: null,
    apiCallResults: null,
    apiCallResultsHits: null
  },
  mutations: {
    setSearchText(state, data) {
      state.recipeSearchText = data;
    },
    saveSearchResults(state, searchResults) {
      state.apiCallResults = searchResults;
      state.apiCallResultsHits = searchResults.data.hits;
    }
  },
  actions: {
    initial({ state }) {
      // console.log("testing store");
    },
    getRecipeResults({ state, commit }, searchText) {
      commit("setSearchText", searchText);
      let builtAPI = `${state.apiURL}${state.recipeSearchText}&app_id=${state.appID}&app_key=${state.appKey}&from=0&to=${state.maxNumResults}&calories=591-722`;
      state.searchAPI = builtAPI;

      axios.get(state.searchAPI).then(response => {
        commit("saveSearchResults", response);
      });
    }
  },
  modules: {}
});
