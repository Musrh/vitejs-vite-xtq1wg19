<template>
  <nav class="navbar">
    <router-link to="/accueil">Accueil</router-link>
    <router-link to="/produits">Produits</router-link>
    <router-link to="/contact">Contact</router-link>
    
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 25px; /* 👈 espace entre les items */
  padding: 15px;
}
</style>
