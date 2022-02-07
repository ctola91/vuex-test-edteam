import { createApp } from "vue";
import App from "./components/App.vue";
import store from "./store";

import router from "./router";

import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
