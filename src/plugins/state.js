import Vue from 'vue';

const state = Vue.observable({
  navbar: {
    key: 0,
    active: false,
  },
  botSettings: {
    darkmode: false,
    navBlur: false,
  },
});

export const getters = {
  navbar: {
    key: () => state.navbar.key,
    active: () => state.navbar.active,
  },
  botSettings: {
    darkmode: () => state.botSettings.darkmode,
    navBlur: () => state.botSettings.navBlur,
  },
};

export const mutations = {
  navbar: {
    key: (val) => (state.navbar.key = val),
    active: (val) => (state.navbar.active = val),
  },
  botSettings: {
    darkmode: (val) => (state.botSettings.darkmode = val),
    navBlur: (val) => (state.botSettings.navBlur = val),
  },
};

export default state;
