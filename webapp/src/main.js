import Vue from 'vue'
import VueMqtt from 'vue-mqtt'
import App from './App.vue'

Vue.use(VueMqtt, 'ws://192.168.1.4:9001');

new Vue({
  el: '#app',
  render: h => h(App),
})
