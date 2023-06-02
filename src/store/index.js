import Vue from 'vue'
import Vuex from 'vuex'
import gx from "./GX/index.js";
import lx from './LX/index';
import wb from './WB/index';
import tsr from './TSR/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gx:gx,
    lx:lx,
    wb:wb,
    tsr:tsr
  }
})
