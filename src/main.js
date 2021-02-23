import { createApp } from "vue";
import App from "./App.vue";

import "./assets/styles/index.css";

export const eventBus = createApp(App);

// Vue.use(Toggler);
createApp(App).mount("#app");

// import Vue from "vue";
// import App from "./App.vue";

// import "./assets/styles/index.css";

// // Vue.config.productionTip = false;

// export const eventBus = new Vue();

// new Vue({
// 	render: (h) => h(App),
// }).$mount("#app");
