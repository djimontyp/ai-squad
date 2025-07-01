<template>
  <v-app>
    <!-- Navigation Bar -->
    <NavBar />
    
    <!-- Main content -->
    <v-main>
      <v-container class="pa-8" max-width="1200">
        <div class="text-center">
          <h1 class="text-h3 mb-4 font-weight-light gradient-text">
            Ласкаво просимо до {{ projectName }}!
          </h1>
          <p class="text-h6 mb-8 font-weight-regular" style="color: rgb(var(--v-theme-gray-600))">
            Навбар з Vuetify створено успішно
          </p>
          
          <div class="d-flex justify-center gap-4 mb-8">
            <v-btn 
              color="primary" 
              size="large"
              @click="showMessage"
              elevation="3"
              class="px-8 vibrant-btn"
            >
              <v-icon start>mdi-check</v-icon>
              Тестова кнопка
            </v-btn>
            
            <v-btn 
              color="secondary"
              size="large"
              @click="count++"
              elevation="3"
              class="px-8 vibrant-btn"
            >
              <v-icon start>mdi-plus</v-icon>
              Лічильник
            </v-btn>
            
            <v-btn 
              color="accent"
              variant="outlined"
              size="large"
              @click="resetCounter"
              class="px-6 vibrant-btn"
            >
              <v-icon start>mdi-refresh</v-icon>
              Скинути
            </v-btn>
          </div>
          
          <v-card 
            class="mx-auto vibrant-card" 
            max-width="360" 
            elevation="4"
            rounded="xl"
          >
            <div class="card-gradient"></div>
            <v-card-text class="pa-8 position-relative">
              <div class="text-h2 text-center font-weight-bold mb-2" style="color: rgb(var(--v-theme-primary))">
                {{ count }}
              </div>
              <div class="text-h6 text-center font-weight-medium" style="color: rgb(var(--v-theme-gray-600))">
                Лічильник
              </div>
              <div class="mt-4 d-flex justify-center">
                <v-chip 
                  :color="count > 10 ? 'success' : count > 5 ? 'warning' : 'info'"
                  variant="elevated"
                  size="small"
                >
                  {{ count > 10 ? 'Високий' : count > 5 ? 'Середній' : 'Низький' }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-main>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
      location="top"
      elevation="6"
      rounded="lg"
    >
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
        >
          Закрити
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NavBar from './components/NavBar.vue'

const count = ref(0)
const projectName = ref(import.meta.env.VITE_PROJECT_NAME || 'AI Squad')

const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

const showMessage = () => {
  snackbar.text = 'Навбар працює чудово! 🎉'
  snackbar.color = 'success'
  snackbar.show = true
}

const resetCounter = () => {
  count.value = 0
  snackbar.text = 'Лічильник скинуто! 🔄'
  snackbar.color = 'info'
  snackbar.show = true
}
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}

.gradient-text {
  background: linear-gradient(135deg, #4F46E5 0%, #10B981 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.vibrant-btn {
  transition: all 0.3s ease !important;
  text-transform: none !important;
}

.vibrant-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3) !important;
}

.vibrant-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.vibrant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(79, 70, 229, 0.2) !important;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4F46E5 0%, #10B981 50%, #F59E0B 100%);
}
</style> 