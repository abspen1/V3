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
          { title: 'Dope project', to: 'Dope' },
          { title: 'Sick project', to: 'Sick' },
          { title: 'Gnarly project', to: "Gnarly" },
        ],
      }
    ],
    projectInfo: [
      {
        name: 'Dope', link: 'https://github.com/abspen1/V3', items:
        {
          demo: 'its right here',
          readme: 'here it is'
        }

      }
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
