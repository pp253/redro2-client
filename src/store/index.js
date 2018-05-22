import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import user from './modules/user'
import engine from './modules/engine'
import account from './modules/account'
import inventory from './modules/inventory'
import io from './modules/io'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    user,
    account,
    inventory,
    io,
    engine
  }
})
