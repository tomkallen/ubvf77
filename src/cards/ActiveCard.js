import React, { Component } from 'react'

class ActiveCard extends Component {
  render () {
    const {type, body, footer} = this.props.data
    return (
      <div className="ActiveCard">
        <div className="Card-header">{type}</div>
        <div className="Card-body">{body}</div>
        <div className="Card-footer">{footer}</div>
      </div>
    )
  }
}

export default ActiveCard