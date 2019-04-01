import Meta from './Meta'
import ActionSet from './ActionSet'

class Burgher extends Meta {
  constructor () {
    super({ type: 'burgher' })
    this.action = new ActionSet('burgher')
  }

  act (type) {
    this.action.act(type)
  }
}

export default Burgher