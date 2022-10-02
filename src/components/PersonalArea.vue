<template>
  <div class="main-container">
    <SideBar/>
    <div class="container">
      <main>
        <h1 class="headline-1">Личный кабинет</h1>
        <div class="my-zone">
          <MyProjects/>
          <MyProfile/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import MyProjects from "@/components/MyProjects";
import MyProfile from "@/components/MyPorfile";

export default {
  name: 'PersonalArea',
  components: { SideBar, MyProjects, MyProfile }
}
</script>