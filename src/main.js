import { createApp } from "vue";
import App from "./App.vue";
import NavbarStrap from "./components/NavbarStrap.vue";
import HeaderStrap from "./components/HeaderStrap.vue";
import AboutStrap from "./components/AboutStrap.vue";
import FooterStrap from "./components/FooterStrap.vue";

const app = createApp(App);
app.component("nav-bootstrap", NavbarStrap);
app.component("header-bootstrap", HeaderStrap);
app.component("about-bootstrap", AboutStrap);
app.component("footer-bootstrap", FooterStrap);

app.mount("#app");
