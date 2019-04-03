import { action, observable } from 'mobx'

class Store {

  @observable week = 1
  @observable freedom = 50
  @observable security = 50
  @observable payment = 0
  @observable militiaCount = 5
  @observable armyCount = 5
  @observable farmerCount = 5
  @observable food = 100

  @action alter ({ key, value }) {
    this[key] = value
  }
}

export default new Store()