import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
// import ElMessage from 'element-plus';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'


const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
// app.use(ElMessage,{size: 'small'});
createApp(App).use(store).use(router).use(ElementPlus, { locale }).mount('#app')
