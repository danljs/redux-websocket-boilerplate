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

  componentWillMount(){
    console.log('componentWillMount')
    var length = this.props.category.length
    this.setState({prices:new Array(length).fill(0,0,length)})
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  componentDidUpdate(prevProps, prevState){
    console.log()
  }
  updateAmount(prices, quatity){
    var amount = parseFloat(Math.round(quatity * prices.reduce((p,c)=>p + c, 0) * 100) / 100).toFixed(2)
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
            var prices = [...me.state.prices]
            prices[i] = parseFloat(e.target.value)
            me.updateAmount(prices, me.state.quatity)
          }}/>
          </div>
        )
      }
      <div className='quatity'>
      <input type='number' step='1' min='1' max='99' defaultValue={me.state.quatity} 
        onChange={e=>{
          console.log([...me.state.prices])
          me.updateAmount([...me.state.prices], e.target.value)}}/></div>
      <div className='amount'>{me.state.amount}</div>
      <div className='delete' onClick={e=>me.props.remove()}></div>
      </li>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_row)