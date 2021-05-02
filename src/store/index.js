import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import twitterBot from './json/twitter-bot.json'

export default new Vuex.Store({
  state: {
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'About', icon: 'mdi-information-outline', to: '/about' },
    ],
    projects: [
      {
        title: 'Projects', icon: 'mdi-palette-advanced', items: [
          { title: 'Twitter Bot', to: 'twitter-bot' },
          { title: 'Sick project', to: 'Sick' },
          { title: 'Gnarly project', to: "Gnarly" },
        ],
      }
    ],
    projectInfo: [
      twitterBot,
    ],
    currProject: {},
  },
  getters: {
    currentItems(state) {
      return state.items
    },
    projects(state) {
      return state.projects
    },
    projectInfo(state) {
      return state.projectInfo
    },
    currentProject(state) {
      return state.currProject
    }
  },
  mutations: {
    projectInfo(state, name) {
      const project = state.projectInfo.find(proj => {
        console.log(proj.name)
        console.log(`name: ${name}`)
        return proj.name === name
      })
      state.currProject = project
    }
  },
  actions: {
  },
  modules: {
  }
})
