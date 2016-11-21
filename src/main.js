import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueValidator from 'vue-validator'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.http.options.emulateJSON = true;
Vue.config.debug = true;

// create router
const router = new VueRouter()

FastClick.attach(document.body);

router.map(routeConfig)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
