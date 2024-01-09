
// import {createApp} from 'vue'
// import {createPinia} from 'pinia'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// import App from './App.vue'
// import router from './router'
//
// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')

import * as Vue from "vue";
import App from "./App.vue";
import { store } from './store'
import {createApp} from "vue";
import {createPinia} from "pinia";
import router from "@/router/index.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')