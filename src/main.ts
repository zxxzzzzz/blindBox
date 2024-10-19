import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css'
import 'virtual:uno.css';
import './style.css';
import 'animate.css';
import { router } from '@/route/index';

createApp(App).use(router).mount('#app');
