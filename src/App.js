import React, { Component } from 'react'
import './App.css'
import ActiveCard from './cards/ActiveCard'
import Card from './cards/Card'
import Burgher from './classes/Burgher'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        { type: 'A', body: 'AA', footer: 'AAA' },
        { type: 'B', body: 'BB', footer: 'BBB' },
        { type: 'C', body: 'CC', footer: 'CCC' },
        { type: 'D', body: 'DD', footer: 'DDD' }
      ]
    }
    this.card = new Burgher()
    this.card.act()
    console.log(this.card)

  }

  drawCards = () =>
    this.state.data
      .slice(1, 4)
      .map(el => <Card data={el}/>)

  drawActiveCard = () => <ActiveCard data={this.state.data[0]}/>

  render () {
    const {freedom, militiaCount, armyCount, food, security, payment} = this.props.store
    return (
      <div className="App">
        <div className="Pane Left">
          <span>food: {food}</span>
          <span>freedom: {freedom}</span>
          <span>militia: {militiaCount}</span>
          <span>army: {armyCount}</span>
          <span>security: {security}</span>
          <span>payment: {payment}</span>
        </div>
        <div className="Pane Center">
          {this.drawActiveCard()}
        </div>
        <div className="Pane Right">
          <div className={'App-card-holder'}>
            {this.drawCards()}
          </div>
        </div>
        <div className="App-wrapper">
        </div>
      </div>
    )
  }
}

export default App
