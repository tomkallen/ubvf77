import actions from '../actionLibrary'
import { pickFew } from '../utils'
import store from '../globalStore'

export default class ActionSet {
  constructor (actor) {
    this.actor = actor
    this.actions = pickFew(actions[actor], 4)
    console.log(store)
  }

  act (num = 0) {
    const action = this.actions[num]
    console.log(`action ${action.action} is ran`)
    action.increase.forEach(a => {
      const { key, value } = a
      store.alter({ key, value })
    })
    action.decrease.forEach(a => {
      const { key, value } = a
      store.alter({ key, value: -value })
    })
  }
}