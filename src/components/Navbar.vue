<template>
  <nav class="navbar">
    <router-link to="/produits">Produits</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-color: var(--primary-color);
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-active {
  text-decoration: underline;
}
</style>
