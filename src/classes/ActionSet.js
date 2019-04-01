import actions from "../actionLibrary"
import { pickFew } from '../utils'
class ActionSet {
  constructor (actor){
    this.actor = actor
    this.actions = pickFew(actions[actor], 3)
  }

  act(type){

  }
}

export default ActionSet