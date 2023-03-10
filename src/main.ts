import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'


Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  apollo: {
    // Apollo specific options
  },
})


const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: h => h(App),
})

