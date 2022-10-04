import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state () {
        return {
            user: {}
        };
    },
    mutations: {
        SET_USER_TO_STATE: (state, user) => {
            state.user = user;
        }
    },
    actions: {
        GET_USER({commit}) {
            return axios.get('api/user-info').then((user) => {
                commit('SET_USER_TO_STATE', user.data);
                return user.data;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    getters: {
        name: (state) => {
            return state.user.name
        },
        email: (state) => {
            return state.user.email
        },
        image: (state) => {
            return state.user.image
        },
        info: (state) => {
            return state.user.info
        }
    }
});

export default store;