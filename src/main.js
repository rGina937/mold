import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "vue-simple-accordion/dist/vue-simple-accordion.css";
import VueSimpleAccordion from "vue-simple-accordion";
Vue.use(VueSimpleAccordion, {
  // ... Options go here
});

import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
