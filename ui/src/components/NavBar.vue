<template>
  <v-app-bar
    color="primary"
    elevation="2"
    height="64"
    class="vibrant-navbar"
  >
    <!-- User section on the left -->
    <div class="d-flex align-center ml-4">
      <v-avatar size="38" color="indigo-100" class="mr-3">
        <v-icon color="indigo-600" size="22">mdi-account</v-icon>
      </v-avatar>
      <div class="d-none d-sm-block">
        <div class="text-body-1 font-weight-medium text-white">John Doe</div>
      </div>
    </div>

    <v-spacer></v-spacer>

    <!-- Project name in the center -->
    <div class="d-flex align-center">
      <v-icon class="mr-2" color="emerald-100" size="26">mdi-account-group</v-icon>
      <span class="text-h6 font-weight-bold text-white">{{ projectName }}</span>
    </div>

    <v-spacer></v-spacer>

    <!-- Actions section on the right -->
    <div class="d-flex align-center mr-4">
      <!-- Settings -->
      <v-btn
        icon
        @click="showSettings"
        class="mr-2 navbar-btn"
        variant="text"
        size="default"
      >
        <v-icon color="amber-100" size="22">mdi-cog</v-icon>
      </v-btn>

      <!-- Logout -->
      <v-btn
        @click="handleLogout"
        variant="text"
        class="text-none navbar-btn"
        size="default"
      >
        <v-icon start color="rose-100" size="20">mdi-logout</v-icon>
        <span class="d-none d-sm-inline text-white">Вихід</span>
      </v-btn>
    </div>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      location="top"
      elevation="4"
      rounded="lg"
    >
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
          size="small"
        >
          Закрити
        </v-btn>
      </template>
    </v-snackbar>
  </v-app-bar>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// Project name from environment variables
const projectName = ref('AI Squad')

const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

const showNotification = (message) => {
  snackbar.text = message
  snackbar.color = 'success'
  snackbar.show = true
}

// Handle logout action
const handleLogout = () => {
  showNotification('Заглушка: Вихід з системи')
}

// Handle settings
const showSettings = () => {
  showNotification('Заглушка: Відкрити налаштування')
}

// Load project name from environment on mount
onMounted(() => {
  const envProjectName = import.meta.env.VITE_PROJECT_NAME
  if (envProjectName) {
    projectName.value = envProjectName
  }
})
</script>

<style scoped>
.text-none {
  text-transform: none !important;
}

.vibrant-navbar {
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #10B981 100%) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.navbar-btn {
  transition: all 0.3s ease !important;
}

.navbar-btn:hover {
  background-color: rgba(255, 255, 255, 0.15) !important;
  transform: translateY(-1px);
}
</style> 