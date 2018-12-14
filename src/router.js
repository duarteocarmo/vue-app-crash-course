import Vue from "vue";
import Router from "vue-router";
import FirstComponent from "./components/FirstComponent.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "FirstComponent",
      component: FirstComponent
    },
    {
      path: "/about/:name",
      name: "about",
      component: About
    }
  ]
});
