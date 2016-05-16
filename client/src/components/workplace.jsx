'use strict'
import React from 'react'
import { connect } from 'react-redux'
import Item from './item'
class workplace extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          items: 
          [
            {name:'name', price:'price'},
            {name:'name', price:'price'},
            {name:'name', price:'price'}
          ]
        }
    }

  render() {
    var me = this
    return (
      <div>
        <div>Workplace</div>
        {
          me.state.items.map((c,i)=>{
            return <Item key={i} name={c.name} price={c.price}/>
          })
        }
      </div>
    )
  }
}
export default connect(any => any)(workplace)