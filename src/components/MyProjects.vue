<template>
  <div class="my-projects">
    <div class="my-projects__top">
      <h2 class="headline-2">Мои проекты</h2>
      <div class="create-project">
        <svg class="create-project__btn" width="20" height="20" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z"
                fill="#7775F8"/>
        </svg>
        <p>Создать проект</p>
        <form class="create-project__form" action="#" method="post">
          <input class="form-control" type="text" name="group_name" placeholder="Название проекта">
          <button class="btn btn-success" type="submit">Подтвердить</button>
        </form>
      </div>
    </div>
    <div class="projects">
      <div class="projects__list">
        <a v-for="project in $store.getters.projects" :key="project.id" :href="project.id" class="project__item">
          <p class="project__name">{{ project.name }}</p>
          <div class="project__desc">
            <div class="project-indicator success"></div>
            Новых задач - {{ project.amount_new }}
          </div>
        </a>
        <div v-if="!$store.getters.projects" class="project__item">
          <p class="project__name">У вас нет проектов</p>
        </div>
      </div>
      <div class="project__actions">
        <form action="#" method="post">
          <button>
            <object data="images/trash.svg" type=""></object>
            Удалить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects'
}
</script>