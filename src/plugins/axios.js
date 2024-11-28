import Vue from "vue";
import Axios from "axios";

Vue.use({
    install(Vue) {
        Vue.prototype.$http = Axios.create({
            // Cole a url do bando realtime do firebase aqui.
            baseURL: ""           
        })
    }
})