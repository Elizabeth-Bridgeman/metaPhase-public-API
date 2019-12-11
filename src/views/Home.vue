<template>
    <div class="home">
        <b-container>
            <b-row class="justify-content-md-center">
                <b-col col lg="10">
                    <b-input-group class="mt-3">
                        <b-form-input
                                v-on:keyup.enter="sendSearchText"
                                v-model="recipeSearchText"
                                placeholder="enter recipes, ingredients, or health labels"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-success" @click="sendSearchText">Search</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>


        <b-container fluid v-if="apiCallResults">
            <b-row>
                <b-col v-for="result in apiCallResultsHits" cols="3">
                    <recipe-snippet :result="result"></recipe-snippet>
                </b-col>
            </b-row>
        </b-container>


        <!--<div v-if="apiCallResults">
            &lt;!&ndash;Number of results: {{ apiCallResults.data.hits.length }}<br/>&ndash;&gt;
            <div v-for="result in apiCallResultsHits">
                <recipe-snippet :result="result"></recipe-snippet>
            </div>
        </div>-->


    </div>
</template>

<script>
  // @ is an alias to /src
  import recipeSnippet from "@/components/recipeSnippet";
  import { mapState } from "vuex";

  export default {
    name: "home",
    data() {
      return {
        recipeSearchText: null
      };
    },
    components: { recipeSnippet },
    computed: {
      ...mapState({
        apiCallResults: state => state.apiCallResults,
        apiCallResultsHits: state => state.apiCallResultsHits
      })
    },
    methods: {
      sendSearchText: function() {
        this.$store.dispatch("getRecipeResults", this.recipeSearchText);
      }
    }
  };
</script>

<style scoped>

</style>
