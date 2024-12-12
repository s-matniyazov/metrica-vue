import { defineStore, acceptHMRUpdate } from 'pinia'

export const useRouterStore = defineStore('counter', {
  state: () => ({
    currentRouter: "home"
  }),

  getters: {},

  actions: {
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRouterStore, import.meta.hot))
}
