import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization_token')}`;

const app = createApp(App);

app.use(router);

app.mount('#app');
