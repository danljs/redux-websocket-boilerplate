'use strict'
import React from 'react';
import { connect } from 'react-redux'

class dashboard extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
      }
  }
  static contextTypes = {
    router: React.PropTypes.object,
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
export default connect(state => state)(dashboard)