'use strict'
import React from 'react'

class item extends React.Component{
  constructor(props) {
      super(props)
  }

  render() {
  	var me = this
  	return(
  		<div>
  		<div>{me.props.name}</div><div>{me.props.price}</div>
  		</div>
  	)
  }
}
export default item