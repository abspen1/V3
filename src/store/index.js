import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'About', icon: 'mdi-information-outline', to: '/about' },
    ],
    projects: [
      {
        title: 'Projects', icon: 'mdi-palette-advanced', items: [
          { title: 'Dope project' },
          { title: 'Sick project' },
          { title: 'Gnarly project' },
        ],
      }
    ]
  },
  getters: {
    currentItems(state) {
      return state.items
    },
    projects(state) {
      return state.projects
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
