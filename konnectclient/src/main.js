import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
import TokenVerification from "@/services/TokenVerification";
TokenVerification.verify().then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
});
