'use strict'
import React from 'react';
import { connect } from 'react-redux'

class workplace extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    var me = this
    return (
      <div>
        <div>Workplace</div>
        
      </div>
    )
  }
}
export default connect(state => state)(workplace)