import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMqtt from 'vue-mqtt'

Vue.use(VueMqtt, 'wss://hairdresser.cloudmqtt.com:35845', {
  clientId: 'WebClient',
  username: 'kaiomodk',
  password: 'oLHGH9Hu1B8e'
})

Vue.config.productionTip = false



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
