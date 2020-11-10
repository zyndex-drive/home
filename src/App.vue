<template>
  <v-app id="app">
    <navDrawer />
    <navBar />
    <v-main>
      <div class="content">
        <router-view></router-view>
      </div>
    </v-main>
    <foot />
  </v-app>
</template>
<script>
import navBar from './components/nav-bar';
import navDrawer from './components/nav-drawer';
import foot from './components/footer';
export default {
  name: 'App',
  components: {
    navBar,
    navDrawer,
    foot,
  },
};
</script>
<style></style>
