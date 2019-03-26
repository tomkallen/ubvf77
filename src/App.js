import React, { Component } from 'react'

import './App.css'
import ActiveCard from './cards/ActiveCard'
import Card from './cards/Card'

class App extends Component {
  state = {
    data: [
      {type: 'A', body: 'AA', footer: 'AAA'},
      {type: 'B', body: 'BB', footer: 'BBB'},
      {type: 'C', body: 'CC', footer: 'CCC'},
      {type: 'D', body: 'DD', footer: 'DDD'}
    ]
  }

  drawCards = () =>
    this.state.data
      .slice(1, 4)
      .map(el => <Card data={el}/>)

  drawActiveCard = () => <ActiveCard data={this.state.data[0]}/>

  render () {
    return (
      <div className="App">
        <div className="Pane Left">left</div>
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
