<script setup>

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
