<template>
  <div class="main-container">
    <div class="main-container registration-container">
      <div class="registration">
        <div class="registration__heading">
          Регистрация
        </div>
        <div class="registration__sign-in">
          Уже есть аккаунт?
          <router-link to="/login" class="sign-in-link">Войдите</router-link>
        </div>
        <form class="registration__form" @submit="sendLoginData($event)">
          <div class="form-group">
            <input name="name" class="registration__form-input" type="text" placeholder="Имя" v-model="name">
            <div class="registration__form-error">
            </div>
          </div>
          <div class="form-group">
            <input name="email" class="registration__form-input" type="text" placeholder="Почта" v-model="email">
            <div class="registration__form-error">
            </div>
          </div>
          <div class="form-group">
            <input name="password" class="registration__form-input" type="password" placeholder="Пароль" v-model="password">
            <div class="registration__form-error">
            </div>
          </div>
          <div class="form-group">
            <input name="password_confirmation" class="registration__form-input" type="password" placeholder="Подтвердите пароль" v-model="password_confirmation">
            <div class="registration__form-error">
            </div>
          </div>
          <div class="confirm-rules">
            <input name="rules" class="registration__form-checkbox" id="confirm-rules" type="checkbox" placeholder="Имя" v-model="rules">
            <label for="confirm-rules">Согласие с правилами обработки</label>
            <div class="registration__form-error">
            </div>
          </div>

          <button class="registration__form-btn" type="submit">Подтвердить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import router from "@/router";
import store from "@/store";

export default {
  name: 'AuthRegistration',
  data(){
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      rules: false
    }
  },
  methods: {
    resetFieldsForErrors(){
      document.querySelectorAll('input').forEach(input => {
        input.parentElement.querySelector('div').innerText = '';
      })
    },
    sendLoginData(event){
      this.resetFieldsForErrors();
      event.preventDefault();
      axios.post('http://192.168.1.252:8080/api/token/create', { name: this.name, email:this.email, password: this.password, password_confirmation: this.password_confirmation, rules: this.rules })
          .then(response => {
            localStorage.setItem('authorization_token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authorization_token')}`;
            store.dispatch('GET_USER');
            router.push({ name: 'personal-area' });
          }).catch(exception => {
            this.displayError(exception);
          });
      store.dispatch('GET_USER');
    },
    displayError(exception){
      const errors = exception.response.data.errors;
      for (let error in errors){
        document.querySelector(`input[name=${error}]`).parentElement.querySelector('div').innerText = errors[error];
      }
    }
  }
}
</script>