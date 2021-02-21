export const state = () => ({
  modal: false,
})

export const mutations = {
  modal(state, val) {
    state.modal = val
  },
}
