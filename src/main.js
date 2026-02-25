import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // 👈 IMPORTER le router

createApp(App)
  .use(router)                  // 👈 ACTIVER le router
  .mount('#app')
