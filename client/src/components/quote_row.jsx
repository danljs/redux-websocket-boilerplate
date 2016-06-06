'use strict'
import React from 'react'
import { connect } from 'react-redux'
import QuoteCell from './quote_cell'

class quote_row extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: [0],
      quatity: 1,
      amount: 0
    }
  }
  componentWillMount() {
    // console.log('componentWillMount')
    // console.log(this.props.category)
  }
  componentWillReceiveProps (nextProps){
    // console.log('componentWillReceiveProps')
    // console.log(nextProps.category)
  }
  componentDidMount(){
  }
  update_row(items, quatity){
    let row = {
      items: items,
      quatity: quatity,
      amount: parseFloat(Math.round(quatity * items
              .map((c,i)=>!!!c.price ? 0 : parseFloat(c.price))
              .reduce((p,c)=>p + c, 0) * 100) / 100).toFixed(2)
    }
    this.setState(row)
    console.log(row) 
    this.props.onChange(row)
  }
  render() {
    // console.log('render')
    let lang = this.props.lang.keys
    // console.log(this.props)
    return (
      <li className='row'>
      {
        this.props.category.map((c,i)=>
          <div key={i} className={'item' + i}>
            <QuoteCell subs={c.sub} change={e=>{
              let items = this.state.items
              items[i] = e
              this.update_row(items, this.state.quatity)
            }}/>
          </div>
        )
      }
      <div className='quatity'>
        <input type='number' step='1' min='1' max='99' defaultValue={this.state.quatity} 
          onChange={e=>{this.update_row(this.state.items, e.target.value)}}/>
      </div>
      <div className='amount'>{this.state.amount}</div>
      <div className='delete' onClick={e=>this.props.remove()}></div>
      </li>
    )
  }
}
export default connect(state => ({lang: state.lang}))(quote_row)