<!--<template>-->
<!--&lt;!&ndash;  <nav-bar></nav-bar>&ndash;&gt;-->
<!--  <sidebar></sidebar>-->
<!--&lt;!&ndash;  <router-view />&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import { defineComponent } from 'vue'-->
<!--import NavBar from '@/components/NavBar.vue'-->
<!--import Sidebar from '@/components/Sidebar.vue'-->

<!--export default defineComponent({-->
<!--  components: { Sidebar, NavBar },-->
<!--  component1: { Sidebar }-->
<!--})-->
<!--</script>-->

<!--<style></style>-->

<template>
  <div id="app">
    <nav class="main-nav">
      <router-view />

      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link to="/profile" class="nav-link">Профиль</router-link>
        </li>
       <li>
          <router-link to="/newspapers" class="nav-link">Газеты</router-link>
        </li>
        <li>
          <router-link to="/printing_house" class="nav-link">Типографии</router-link>
        </li>
         <li>
          <router-link to="/post_offices" class="nav-link">Почтовые отделения</router-link>
        </li>
        <li>
          <router-link to="/print_runs" class="nav-link">Тиражи</router-link>
        </li>
        <li>
          <router-link to="/post_arrivals" class="nav-link">Поступления</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link bottom-button">Выйти</router-link>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  }
};
</script>
<style>

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.bottom-button {
  position: fixed;
  bottom: 5px;
  left: 50px;
}

.main-nav {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;

  display: flex;
  justify-content: center;
  padding: 10px;
  overflow: auto;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

.nav-link:hover{
  color: #b0b0b0 !important;
}

.router-link-exact-active {
  color: #b0b0b0 !important;
}
</style>
