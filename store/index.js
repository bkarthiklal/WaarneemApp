// holds your root state
export const state = () => ({
  isSideBarOpen: false,
  shifts: [],
})

// contains your actions
export const actions = {
  setSideBarStatus({ state, commit }, payload) {
    commit('setSidebarStatus', payload)
  },
  addShift({ state, commit }, payload) {
    commit('addShift', payload)
  },
  removeShift({ state, commit }, payload) {
    commit('removeShift', payload)
  },
}

// contains your mutations
export const mutations = {
  setSidebarStatus(state, value) {
    state.isSideBarOpen = value
  },
  addShift(state, value) {
    state.shifts.push(value)
  },
  removeShift(state, value) {
    state.shifts = state.shifts.filter((shift) => shift.id !== value.id)
  },
}

// your root getters
export const getters = {
  sideBarStatus(state) {
    return state.isSideBarOpen
  },
  getShifts(state) {
    return state.shifts
  },
}
