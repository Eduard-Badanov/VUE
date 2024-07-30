import App from '@/App.vue'
import { components } from '@/components/UI/UIComponents'
import router from '@/router/index'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp(App)

components.forEach((component) => {
	app.component(component.name, component)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
