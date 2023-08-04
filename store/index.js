// holds your root state
export const state = () => ({
  isSideBarOpen: false,
})

// contains your actions
export const actions = {
  setSideBarStatus({ state, commit }, payload) {
    commit('setSidebarStatus', payload)
  },
}

// contains your mutations
export const mutations = {
  setSidebarStatus(state, value) {
    state.isSideBarOpen = value
  },
}

// your root getters
export const getters = {
  sideBarStatus(state) {
    return state.isSideBarOpen
  },
}
