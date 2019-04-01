import actions from "../actionLibrary"
import { pickFew } from '../utils'
class ActionSet {
  constructor (actor){
    this.actor = actor
    this.actions = pickFew(actions[actor], 3)
  }

  act(num = 0){
    console.log(`action ${num} is ran, it is ${this.actions[num].action}`)

  }
}

export default ActionSet