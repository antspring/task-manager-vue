<template>
  <div class="main-container">
    <div class="main-container registration-container">
      <div class="registration">
        <div class="registration__heading">
          Авторизация
        </div>
        <div class="registration__sign-in">
          Нет аккаунта?
          <router-link to="/registration" class="sign-in-link">Зарегистрируйтесь</router-link>
        </div>
        <form id="form" @submit="sendLoginData($event)" class="registration__form">
          <div class="form-group">
            <input name="email" class="registration__form-input" type="text" placeholder="Почта" v-model="email">
            <div class="registration__form-error"></div>
          </div>
          <div class="form-group">
            <input name="password" class="registration__form-input" type="password" placeholder="Пароль" v-model="password">
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
import axios from 'axios'
import router from '../router';

export default {
  name: 'AuthLogin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    resetFieldsForErrors(){
      document.querySelectorAll('input').forEach(input => {
        input.parentElement.querySelector('div').innerText = ''
      })
    },
    sendLoginData(event){
      this.resetFieldsForErrors()
      event.preventDefault()
      axios.post('http://task-manager-api/api/token/regenerate', { email:this.email, password: this.password })
          .then(response => {
            localStorage.setItem('authorization_token', response.data.token);
            router.push({ name: 'personal-area' })
          }).catch(exception => {
            this.displayError(exception);
          })
    },
    displayError(exception){
      const errors = exception.response.data.errors
      for (let error in errors){
        document.querySelector(`input[name=${error}]`).parentElement.querySelector('div').innerText = errors[error]
      }
    }
  }
}
</script>