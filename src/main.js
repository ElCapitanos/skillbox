import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import homework1 from './func'
//import homework2 from './func'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
