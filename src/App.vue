<script setup>
//import HelloWorld from './components/HelloWorld.vue'

import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>

<template>
<div id="app">
    <Navbar />
    <router-view></router-view>
  </div>

</template>
