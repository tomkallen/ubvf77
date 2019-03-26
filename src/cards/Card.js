import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  render () {
    const {type, body, footer} = this.props.data
    return (
      <div className={'Card'}>
        <div className={'Card-header'}>{type}</div>
        <div className={'Card-body'}>{body}</div>
        <div className={'Card-footer'}>{footer}</div>
      </div>
    )
  }
}

export default Card