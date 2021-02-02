import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import AppAvatar from './AppAvatar.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(ElementUI);

Vue.use(VueFormWizard)

Vue.config.productionTip = false



new Vue({
  render: h => h(App2),
}).$mount('#app2')

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(AppAvatar),
}).$mount('#avatar')
