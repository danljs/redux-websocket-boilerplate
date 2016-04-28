'use strict'
import React from 'react'

class base extends React.Component{
  constructor(props) {
      super(props)
  }
  static contextTypes = {
    router: React.PropTypes.object
  }        
  render() {}
}
export default base