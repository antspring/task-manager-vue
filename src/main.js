import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization_token')}`;

store.dispatch('GET_USER');

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');
