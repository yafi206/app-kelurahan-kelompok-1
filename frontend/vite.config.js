import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     react(),
     VitePWA({ // Perbaikan: Gunakan V kapital
       registerType: 'autoUpdate',
       includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.svg'],
       manifest: {
         name: 'SI-GERCAP',
         short_name: 'SI-GERCAP',
         description: 'Aplikasi Kelurahan Kelompok 1',
         display: 'standalone',
         orientation: 'portrait',
         start_url: '/',
         icons: [
           {
             src: 'pwa-192x192.png',
             sizes: '192x192',
             type: 'image/png'
           },
           {
             src: 'pwa-512x512.png',
             sizes: '512x512',
             type: 'image/png'
           },
           {
             src: 'pwa-512x512.png',
             sizes: '512x512',
             type: 'image/png',
             purpose: 'any maskable'
           }
         ]
       }
     }),
   ],
})
