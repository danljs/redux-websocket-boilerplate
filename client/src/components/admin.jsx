'use strict'
import React from 'react'
import { connect } from 'react-redux'
class admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    var lang = this.props.lang.keys
    return (
      <div className='admin'>
        <div>admin</div>
      </div>
    )
  }
}
export default connect(any => any)(admin)