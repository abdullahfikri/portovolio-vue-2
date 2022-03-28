import { createApp } from "vue";
import App from "./App.vue";
import NavbarStrap from "./components/NavbarStrap.vue";
import HeaderStrap from "./components/HeaderStrap.vue";
import AboutStrap from "./components/AboutStrap.vue";
import WorkStrap from "./components/WorkStrap.vue";
import ContactStrap from "./components/ContactStrap.vue";
import FooterStrap from "./components/FooterStrap.vue";

const app = createApp(App);

app.component("nav-bootstrap", NavbarStrap);
app.component("header-bootstrap", HeaderStrap);
app.component("about-bootstrap", AboutStrap);
app.component("work-bootstrap", WorkStrap);
app.component("contact-bootstrap", ContactStrap);
app.component("footer-bootstrap", FooterStrap);

app.mount("#app");
