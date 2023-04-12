import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/scss/bootstrap.scss";
// import "bootstrap/dist/js/bootstrap.js";
import * as bootstrap from 'bootstrap'
import "../src/scss/index.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
