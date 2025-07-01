import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'vibrant',
    themes: {
      vibrant: {
        dark: false,
        colors: {
          // Vibrant modern palette
          primary: '#4F46E5',        // Modern indigo - brighter
          secondary: '#10B981',      // Vibrant emerald green
          accent: '#F59E0B',         // Energetic amber
          surface: '#FFFFFF',        // Pure white
          background: '#FAFBFC',     // Very light blue-gray
          'on-primary': '#FFFFFF',   // White text on primary
          'on-secondary': '#FFFFFF', // White text on secondary
          'on-surface': '#1F2937',   // Dark text on surface
          'on-background': '#1F2937', // Dark text on background
          
          // Extended vibrant colors
          'indigo-50': '#EEF2FF',    // Very light indigo
          'indigo-100': '#E0E7FF',   // Light indigo
          'indigo-500': '#6366F1',   // Medium indigo
          'indigo-600': '#4F46E5',   // Primary indigo
          'indigo-700': '#4338CA',   // Dark indigo
          
          'emerald-50': '#ECFDF5',   // Very light green
          'emerald-100': '#D1FAE5',  // Light green
          'emerald-500': '#10B981',  // Primary green
          'emerald-600': '#059669',  // Dark green
          
          'amber-50': '#FFFBEB',     // Very light amber
          'amber-100': '#FEF3C7',    // Light amber
          'amber-500': '#F59E0B',    // Primary amber
          'amber-600': '#D97706',    // Dark amber
          
          'rose-50': '#FFF1F2',      // Very light rose
          'rose-500': '#F43F5E',     // Rose accent
          
          'purple-50': '#FAF5FF',    // Very light purple
          'purple-500': '#A855F7',   // Purple accent
          
          // Gray scale - warmer tones
          'gray-50': '#F9FAFB',      // Very light gray
          'gray-100': '#F3F4F6',     // Light gray
          'gray-200': '#E5E7EB',     // Medium light gray
          'gray-300': '#D1D5DB',     // Medium gray
          'gray-400': '#9CA3AF',     // Medium gray
          'gray-500': '#6B7280',     // Medium dark gray
          'gray-600': '#4B5563',     // Dark gray
          'gray-700': '#374151',     // Very dark gray
          'gray-800': '#1F2937',     // Almost black
          
          // Status colors - vibrant and clear
          success: '#10B981',        // Emerald green
          warning: '#F59E0B',        // Amber
          error: '#F43F5E',          // Rose
          info: '#3B82F6'            // Blue
        }
      }
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.mount('#app') 