'use strict'
import React from 'react'
import { connect } from 'react-redux'
class quote_item extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      amount: 0
    }
  }

  componentDidMount(){
  }

  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <li className='row'>
      {
        me.props.category.map((c,i)=>
          <div key={i} className={'item' + i}>
          <select onChange={e=>{me.props.sum(5)}}>
            {c.sub.map((s,j)=><option key={j}>{s[lang.item_name]}</option>)}
          </select>
          </div>
        )
      }
      <div className='amount'>{parseFloat(Math.round(me.state.amount * 100) / 100).toFixed(2)}</div>
      <div className='delete' onClick={e=>{me.props.remove()}}></div>
      </li>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_item)