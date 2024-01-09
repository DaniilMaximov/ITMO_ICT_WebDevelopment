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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
    NavBar
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

.main-nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  overflow: auto;
  height: 100%;
  width: 100%;
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
</style>
