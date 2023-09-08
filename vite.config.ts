import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@infrastructure', replacement: '/src/app/infrastructure' },
      { find: '@domain', replacement: '/src/app/domain' }
  ],
  }
})
