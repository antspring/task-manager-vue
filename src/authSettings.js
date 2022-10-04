import axios from 'axios';
import store from "@/store";

export function setSettings(){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization_token')}`;
    store.dispatch('GET_USER');
    store.dispatch('GET_PROJECTS');
}