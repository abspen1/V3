import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import allProjects from './json/all-projects.json'
import twitterBot from './json/projects/twitter-bot.json'
import abspen1 from './json/projects/abspen1.json'
import alpacaPython from './json/projects/alpaca-python.json'
import attendanceGui from './json/projects/attendance-gui.json'
import bots from './json/projects/battle-of-the-states.json'
import bdayEmail from './json/projects/bday-email.json'
import capTrack from './json/projects/capital-tracker.json'
import coffee from './json/projects/coffee-shop.json'
import discord from './json/projects/discord-bot.json'
import eav2 from './json/projects/eav2.json'
import encodeDecode from './json/projects/encode-decode.json'
import goBackend from './json/projects/go-backend.json'
import goEncode from './json/projects/go-encode.json'
import goTrading from './json/projects/go-trading-algo.json'
import lexical from './json/projects/lexical-analyzer.json'
import rps from './json/projects/rps-js.json'
import pacman from './json/projects/PacMan-PyGame.json'
import v3 from './json/projects/v3.json'

export default new Vuex.Store({
  state: {
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'About', icon: 'mdi-information-outline', to: '/about' },
    ],
    projects: [
      allProjects,
    ],
    projectInfo: [
      twitterBot,
      abspen1,
      alpacaPython,
      attendanceGui,
      bots,
      bdayEmail,
      capTrack,
      coffee,
      discord,
      eav2,
      encodeDecode,
      goBackend,
      goEncode,
      goTrading,
      lexical,
      rps,
      pacman,
      v3,
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
      state.currProject = state.projectInfo.find(proj => {
        return proj.name === name
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
