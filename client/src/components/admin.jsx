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
    var me = this
    var lang = me.props.lang.keys
    return (
      <div className='estimation'>
        <div>admin</div>
      </div>
    )
  }
}
export default connect(any => any)(admin)