import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyD0418MxDbOfHXNihWSd0bvWA-a_bBD3iM",
  authDomain: "address-app-180b7.firebaseapp.com",
  projectId: "address-app-180b7",
  storageBucket: "address-app-180b7.appspot.com",
  messagingSenderId: "933988680713",
  appId: "1:933988680713:web:31c18995d41c8eebf864d8",
  measurementId: "G-JR8G6LGVK6",
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
