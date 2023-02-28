import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import 'core-js/stable'; // polyfilling in general
import 'regenerator-runtime/runtime'; //polyfilling async await
// import { search } from 'core-js/fn/symbol';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
  } catch (err) {
    console.error(err);
  }
};
controlSearchResults();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
