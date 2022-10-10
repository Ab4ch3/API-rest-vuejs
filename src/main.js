import { createApp, Vue } from "vue";
import App from "./App.vue";
import router from "./router";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAxios from "vue-axios";
import axios from "axios";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(router, VueAxios, axios).mount("#app");
