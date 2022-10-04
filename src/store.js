import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state () {
        return {
            user: {},
            projects: {}
        };
    },
    mutations: {
        SET_USER_TO_STATE: (state, user) => {
            state.user = user;
        },
        SET_PROJECTS_TO_STATE: (state, projects) => {
            state.projects = projects;
        }

    },
    actions: {
        GET_USER({commit}) {
            return axios.get('api/user-info').then((user) => {
                commit('SET_USER_TO_STATE', user.data);
                return user.data;
            }).catch(error => {
                console.log(error);
            });
        },
        GET_PROJECTS({commit}) {
            return axios.get('api/user-groups').then((projects) => {
                commit('SET_PROJECTS_TO_STATE', projects.data);
                return projects.data;
            }).catch(error => {
                console.log(error);
            });
        }
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        projects: (state) => {
            return state.projects;
        }
    }
});

export default store;