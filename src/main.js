// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

// Import plugins
import router from "./router";
import VueHighlightJS from "vue-highlight.js";
import Vuetify from 'vuetify'

// Highlight.js languages (Only required languages)
import shell from "highlight.js/lib/languages/shell";
import ruby from "highlight.js/lib/languages/ruby";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import "highlight.js/styles/an-old-hope.css";
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/main.styl'

// Use plugins
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: { shell, ruby, javascript, python }
});
Vue.use(Vuetify)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
