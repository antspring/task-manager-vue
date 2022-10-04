import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';
import { setSettings } from "@/authSettings";

axios.defaults.baseURL = 'http://192.168.1.252:8080/';

setSettings();

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');
