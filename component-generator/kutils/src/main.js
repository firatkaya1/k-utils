import { createApp } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from './router'
import TextSizePicker from './common/TextSizePicker.vue'
import ColorPicker from './common/ColorPicker.vue'
import FontPicker from './common/FontPicker.vue'
import Result from './common/Result.vue'
import BorderRadiusPicker from './common/BorderRadiusPicker.vue'


createApp(App)
    .use(router)
    .component('ColorPicker',ColorPicker)
    .component('TextSizePicker',TextSizePicker)
    .component('FontPicker',FontPicker)
    .component('BorderRadiusPicker',BorderRadiusPicker)
    .component('Result',Result)
    .mount('#app')

