import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import moment from 'moment'

@Module({
  stateFactory: true
})
export default class extends VuexModule {
  username: string | null = null
  loggedAt: moment.Moment | null = null
  loggedIn: boolean = false

  // Mutations
  @Mutation
  setLogged(loggedIn: boolean) {
    this.loggedAt = loggedIn ? moment() : null
    this.loggedIn = loggedIn
  }
  @Mutation
  setUser(user: any) {
    this.username = user.username
  }
  @Mutation
  unsetUser() {
    this.username = null
  }

  // Actions
  @Action
  login(user: any): void {
    this.context.commit('setUser', user)
    this.context.commit('setLogged', true)
  }
  @Action
  logoff(): void {
    this.context.commit('unsetUser')
    this.context.commit('setLogged', false)
  }

  // Getters
  get getLoggedAt(): moment.Moment | null {
    return this.loggedAt
  }
}