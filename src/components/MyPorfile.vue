<template>
  <div class="my-profile">
    <form class="profile__form" action="#" method="post" enctype="multipart/form-data">
      <div class="profile__image">
        <div class="profile__image-inner">
          <img id="output-image" :src="$store.getters.image" alt="">
          <div class="upload-avatar__overlay">
            <label for="image-upload">Загрузить фото</label>
            <input id="image-upload" name="image" type="file">
          </div>
        </div>
      </div>
      <div class="form__input-list">
        <input disabled :value="$store.getters.name" name="name" type="text" class="form-control profile__form-input" placeholder="name">
        <input disabled :value="$store.getters.email" name="email" type="email" class="form-control profile__form-input" placeholder="email">
        <input disabled :value="$store.getters.info" name="info" type="text" class="form-control profile__form-input" placeholder="telegram/telephone">
      </div>
      <input class="btn btn-primary profile-btn" type="button" value="Изменить">
    </form>
  </div>
</template>

<script>
export default {
  name: 'MyProfile',
}
</script>