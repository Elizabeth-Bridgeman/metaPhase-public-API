/*
/!* eslint-disable no-console *!/
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
      "low-sugar": ["#F2E9E4", "black"],
      "sugar-conscious": ["#F2E9E4", "black"],
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
      "kidney-friendly": ["#9BC53D", "white"],
      "kosher": ["#9BC53D", "white"],
      "low-potassium": ["#9BC53D", "white"],
      "low-fat-abs": ["#9A8C98", "white"],
      "no-oil-added": ["#9A8C98", "white"],
      "peanut-free": ["#363654", "white"],
      "tree-nut-free": ["#363654", "white"],
      "sesame-free": ["#363654", "white"],
      "wheat-free": ["#b94d2f", "white"],
      "soy-free": ["#b94d2f", "white"],
      "dairy-free": ["#F77F00", "white"],
      "egg-free": ["#F77F00", "white"],
      "pork-free": ["#FCBF49", "black"],
      "red-meat-free": ["#FCBF49", "black"],
      "fish-free": ["#5BC0EB", "white"],
      "pecatarian": ["#5BC0EB", "white"],
      "shellfish-free": ["#5BC0EB", "white"],
      "vegan": ["#D62828", "white"],
      "vegetarian": ["#6c757d", "white"],
    },
    ImAStoreVar: "hello i am from the store",
    pokeText: null,
    storePoke: null,
    pokeImg: null,
    apiURL: "https://api.edamam.com/search?q=alcohol&app_id=",
    appID: "a5c01004",
    appKey: "69b24a1f18ca44d1d30ad1227b1e9a82",
    maxNumResults: 5,
    searchAPI: null,
    apiCallResults: null,
    apiCallResultsHits: null
  },
  mutations: {
    setPoke(state, data) {
      state.pokeText = data;
    },
    savePoke(state, pokeApi) {
      state.storePoke = pokeApi;
      state.pokeImg = pokeApi.data.sprites.front_default;
    },
    saveSearchResults(state, searchResults) {
      state.apiCallResults = searchResults;
      state.apiCallResultsHits = searchResults.data.hits;
    }
  },
  actions: {
    initial({ state }) {
      let builtAPI = `${state.apiURL}${state.appID}&app_key=${state.appKey}&from=0&to=${state.maxNumResults}&calories=591-722`;
      // let builtAPI = state.apiURL + state.appID + "&app_key=" + state.appKey + "&from=0&to=" + state.maxNumResults + "&calories=591-722&health=alcohol-free";
      state.searchAPI = builtAPI;
      console.log(builtAPI);
    },
    getPokemon({ state, commit }) {
      /!*axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => {
        commit("savePoke", response);
      });*!/

      axios.get(state.searchAPI).then(response => {
        commit("saveSearchResults", response);
      });
    }
  },
  modules: {}
});
*/
