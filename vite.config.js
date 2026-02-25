import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 🔹 Important : base doit correspondre au nom exact du repo GitHub
export default defineConfig({
  plugins: [vue()],
  base: '/vitejs-vite-xtq1wg19/'  // ✅ nom exact du repo GitHub
})
