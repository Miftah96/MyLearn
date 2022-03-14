import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/_styles.scss"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './css/tailwind.css'

// PrimeVue
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import Menubar from 'primevue/menubar';

const app = createApp(App)

app.use(PrimeVue);
app.use(router)
app.use(VueSweetalert2);
app.component('Dialog', Dialog);
app.component('Menubar', Menubar);
app.component('Button', Button);

app.mount('#app')
