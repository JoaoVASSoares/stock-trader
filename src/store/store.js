import Vue from "vue";
import Vuex from "vuex";
import stocks from "./modules/stocks.js"
import portfolio from "./modules/portfolio.js";
import action from "./action.js";


Vue.use(Vuex);

export default new Vuex.Store({
    actions: action,
    modules: {
        stocks,
        portfolio,
    }
});