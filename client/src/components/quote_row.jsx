'use strict'
import React from 'react'
import { connect } from 'react-redux'
import QuoteCell from './quote_cell'

class quote_row extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      prices: [0],
      quatity: 1,
      amount: 0
    }
  }
  updateAmount(prices, quatity){
    var amount = parseFloat(Math.round(quatity * prices
      .map((c,i)=>!!!c ? 0 : parseFloat(c))
      .reduce((p,c)=>p + c, 0) * 100) / 100).toFixed(2)
    this.setState({
      prices: prices,
      quatity: quatity,
      amount: amount
    })
    this.props.sum(amount)
  }
  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <li className='row'>
      {
        me.props.category.map((c,i)=>
          <div key={i} className={'item' + i}>
          <QuoteCell subs={c.sub} change={e=>{
            var prices = me.state.prices
            prices[i] = e.target.value
            me.updateAmount(prices, me.state.quatity)
          }}/>
          </div>
        )
      }
      <div className='quatity'>
      <input type='number' step='1' min='1' max='99' defaultValue={me.state.quatity} 
        onChange={e=>{me.updateAmount(me.state.prices, e.target.value)}}/></div>
      <div className='amount'>{me.state.amount}</div>
      <div className='delete' onClick={e=>me.props.remove()}></div>
      </li>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_row)