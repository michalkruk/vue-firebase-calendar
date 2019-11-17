import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
    apiKey: 'AIzaSyA8m12Xz_-OyFpxn7zurKggWIOTD2RJJlY',
    authDomain: 'vue-calendar-1371a.firebaseapp.com',
    databaseURL: 'https://vue-calendar-1371a.firebaseio.com',
    projectId: 'vue-calendar-1371a',
    storageBucket: 'vue-calendar-1371a.appspot.com',
    messagingSenderId: '71656755978',
    appId: '1:71656755978:web:6dc1e412229d48a170a0f3'
});

export const db = firebase.firestore();

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
