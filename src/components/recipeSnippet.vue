<template>
    <div>

        <b-modal ref="my-modal" hide-footer size="xl" :title="result.recipe.label">


            <b-container fluid>
                <b-row align-h="between">
                    <b-col cols="3">
                        <b-img :src="result.recipe.image" fluid alt="Responsive image"></b-img>
                        <div v-for="healthLabel in result.recipe.healthLabels" class="disIn">
                            <b-badge :style="'background-color: ' + healthLabelColors[(healthLabel).toLowerCase()][0] + '; color: ' + healthLabelColors[(healthLabel).toLowerCase()][1]">{{
                                healthLabel }}
                            </b-badge>
                        </div>
                    </b-col>
                    <b-col cols="9">
                        <h5>Ingredients</h5>
                        <b-row>
                            <b-col cols="6">
                                <div v-for="leftIngredient in ingredientsList[0]">&#8226; {{leftIngredient}}</div>

                            </b-col>
                            <b-col cols="6">
                                <div v-for="rightIngredient in ingredientsList[1]">&#8226; {{rightIngredient}}</div>

                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <h5>Directions</h5>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Maecenas fermentum, neque ut gravida vulputate, urna dolor vestibulum lectus, at auctor orci orci at magna.</li>
                            <li>Aliquam pulvinar ex tincidunt, laoreet nulla a, blandit magna.</li>
                            <li>Duis pellentesque sagittis sollicitudin.</li>
                            <li>Sed convallis luctus efficitur</li>
                        </ol>

                    </b-col>

                </b-row>
            </b-container>

            <hr>
            <b-container fluid>
                <div class="nFactsLg">Nutrition Facts</div>
                {{result.recipe.yield}} servings per recipe
                <div class="nFacts">Calories per Recipe: {{Math.ceil(result.recipe.calories)}}</div>
                <div class="nFactsDivider"></div>

                <div>
                    <span class="nFactsSub">Total Fat: </span>
                    <span v-if="result.recipe.totalNutrients.FAT">{{(result.recipe.totalNutrients.FAT.quantity).toFixed(2)}}{{result.recipe.totalNutrients.FAT.unit}}</span>
                    <br>
                    <span class="ml-3">Saturated Fat: </span> <span v-if="result.recipe.totalNutrients.FASAT">{{(result.recipe.totalNutrients.FASAT.quantity).toFixed(2)}}{{result.recipe.totalNutrients.FASAT.unit}}</span>
                    <span class="ml-3">Trans Fat: </span> <span v-if="result.recipe.totalNutrients.FATRN">{{(result.recipe.totalNutrients.FATRN.quantity).toFixed(2)}}{{result.recipe.totalNutrients.FATRN.unit}}</span>
                </div>


                <div>
                    <span class="nFactsSub">Cholesterol: </span>
                    <span v-if="result.recipe.totalNutrients.CHOLE">{{(result.recipe.totalNutrients.CHOLE.quantity).toFixed(2)}}{{result.recipe.totalNutrients.CHOLE.unit}}</span>
                </div>
                <div>
                    <span class="nFactsSub">Sodium: </span>
                    <span v-if="result.recipe.totalNutrients.NA">{{(result.recipe.totalNutrients.NA.quantity).toFixed(2)}}{{result.recipe.totalNutrients.NA.unit}}</span>
                </div>

                <div>
                    <span class="nFactsSub">Total Carbohydrate: </span>
                    <span v-if="result.recipe.totalNutrients.CHOCDF">{{(result.recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}}{{result.recipe.totalNutrients.CHOCDF.unit}}</span>
                    <br>
                    <span class="ml-3">Dietary Fiber: </span>
                    <span v-if="result.recipe.totalNutrients.FIBTG">{{(result.recipe.totalNutrients.FIBTG.quantity).toFixed(2)}}{{result.recipe.totalNutrients.FIBTG.unit}}</span>
                    <span class="ml-3">Total Sugars: </span>
                    <span v-if="result.recipe.totalNutrients.SUGAR">{{(result.recipe.totalNutrients.SUGAR.quantity).toFixed(2)}}{{result.recipe.totalNutrients.SUGAR.unit}}</span>
                    <span class="ml-5">Includes </span>
                    <span v-if="result.recipe.totalNutrients['SUGAR.added']">{{(result.recipe.totalNutrients["SUGAR.added"].quantity).toFixed(2)}} {{result.recipe.totalNutrients["SUGAR.added"].unit}} Added Sugars</span>
                </div>
                <div>
                    <span class="nFactsSub">Protein: </span>
                    <span v-if="result.recipe.totalNutrients.PROCNT">{{(result.recipe.totalNutrients.PROCNT.quantity).toFixed(2)}}{{result.recipe.totalNutrients.PROCNT.unit}}</span>
                </div>
                <div class="nFactsDivider"></div>
                <div class="nFactsDivider"></div>
                <span>Vitamin D: </span>
                <span v-if="result.recipe.totalNutrients.VITD">{{(result.recipe.totalNutrients.VITD.quantity).toFixed(2)}}{{result.recipe.totalNutrients.VITD.unit}}</span><br>
                <span>Calcium: </span>
                <span v-if="result.recipe.totalNutrients.CA">{{(result.recipe.totalNutrients.CA.quantity).toFixed(2)}}{{result.recipe.totalNutrients.CA.unit}}</span><br>
                <span>Iron: </span>
                <span v-if="result.recipe.totalNutrients.FE">{{(result.recipe.totalNutrients.FE.quantity).toFixed(2)}}{{result.recipe.totalNutrients.FE.unit}}</span><br>
                <span>Potassium: </span>
                <span v-if="result.recipe.totalNutrients.K">{{(result.recipe.totalNutrients.K.quantity).toFixed(2)}}{{result.recipe.totalNutrients.K.unit}}</span>


            </b-container>


        </b-modal>

        <b-card @click="toggleModal"
                :title="result.recipe.label"
                :img-src="result.recipe.image"
                img-alt="Recipe Image"
                tag="article"
                class="m-4">
            <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit....
            </b-card-text>

            <b-container fluid>
                <b-row align-h="between">
                    <b-col cols="4">

                        {{caloriesPerServing}}
                        <div class="smallText">calories per serving</div>
                    </b-col>
                    <b-col cols="5">
                        <div @mouseover="healthLabelsHover = true" @mouseleave="healthLabelsHover = false">
                            <div v-if="healthLabelsHover" v-for="healthLabel in result.recipe.healthLabels" class="disIn">
                                <b-badge :style="'background-color: ' + healthLabelColors[(healthLabel).toLowerCase()][0] + '; color: ' + healthLabelColors[(healthLabel).toLowerCase()][1]">{{
                                    healthLabel }}
                                </b-badge>
                            </div>
                            <div v-if="!healthLabelsHover" v-for="healthLabel in result.recipe.healthLabels" class="disIn">
                                <span class="healthDot" :style="'background-color: ' + healthLabelColors[(healthLabel).toLowerCase()][0]"></span>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>

    </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "recipeSnippet",
    data() {
      return {
        testingArr: [],
        healthLabelsHover: false
      };
    },
    props: ["result"],
    components: {},
    computed: {
      ...mapState({
        healthLabelColors: state => state.healthLabelColors
      }),
      caloriesPerServing() {
        return Math.ceil(this.result.recipe.calories / this.result.recipe.yield);
      },
      ingredientsList() {
        let newArr = [[], []];
        for (let i = 0; i < this.result.recipe.ingredients.length; i++) {
          if (!(i % 2)) { /*if even*/
            newArr[0].push(this.result.recipe.ingredients[i].text);
          }
          else {
            newArr[1].push(this.result.recipe.ingredients[i].text);
          }
        }
        return newArr;
      }
    },
    methods: {
      toggleModal() {
        this.$refs["my-modal"].toggle("#toggle-btn");
      }
    }
  };
</script>

<style scoped>
    .disIn {
        display: inline;
    }

    .smallText {
        font-size: 10px;
    }

    .healthDot {
        border: 1px solid black;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        display: inline-block;
    }

    article > img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin: auto;
    }

    article > .card-body {
        padding: 0 !important;
    }

    article {
        padding: 20px 5px;
        border: none !important
    }

    .nFactsLg, .nFacts, .nFactsSub {
        font-family: Impact, Charcoal, sans-serif;
    }

    .nFactsLg {
        font-size: 40px;
    }

    .nFacts {
        font-size: 30px;
    }

    .nFactsSub {
        font-size: 15px;
    }

    .nFactsDivider {
        height: 10px;
        background-color: black;
    }

    article:hover {
        box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        cursor: pointer;
    }
</style>