'use strict'
import React from 'react'
import { connect } from 'react-redux'
import base from './base'

class dashboard extends base{
  constructor(props) {
      super(props)
      this.state = {
      }
  }
  
  render() {
    var me = this
    return (
      <div>
        <div>Dashboard</div>
        <button type="submit" className="btn btn-default" onClick={e => {
          me.context.router.push('/workplace')
        }}>go!</button>
      </div>
    )
  }
}
export default connect(any => any)(dashboard)