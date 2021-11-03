import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "tailwindcss/tailwind.css"
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

import router from './router'
import TextSizePicker from './common/TextSizePicker.vue'
import ColorPicker from './common/ColorPicker.vue'
import FontPicker from './common/FontPicker.vue'
import Result from './common/Result.vue'
import BorderRadiusPicker from './common/BorderRadiusPicker.vue'
import PageRouting from './common/PageRouting.vue'
import NotificationList from './common/NotificationList.vue'
import CodeViewer from './common/CodeViewer.vue'
import CodeEditor from './common/CodeEditor.vue'


createApp(App)
    .use(router)
    .use(store)
    .use(VueHighlightJS)
    .component('ColorPicker',ColorPicker)
    .component('TextSizePicker',TextSizePicker)
    .component('FontPicker',FontPicker)
    .component('BorderRadiusPicker',BorderRadiusPicker)
    .component('Result',Result)
    .component('PageRouting',PageRouting)
    .component('NotificationList',NotificationList)
    .component('CodeViewer',CodeViewer)
    .component('CodeEditor',CodeEditor)

    .mount('#app')

