'use strict'
import React from 'react'
import { connect } from 'react-redux'
import QuoteItem from './quote_item'

class quote extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: 
      [
        {category:'category', name:'name1', price:10},
        {category:'category', name:'name2', price:20},
        {category:'category', name:'name3', price:30}
      ],
      category: [],
      summary: 0.00
    }
  }

  componentDidMount(){
    var me = this
    var lang = me.props.lang.keys
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        me.setState({category: JSON.parse(xmlhttp.response).category})
      }
    }
    xmlhttp.open('GET', 'data/data.json', true)
    xmlhttp.send()
  }

  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <div className='quote'>
        <div></div>
        <div className='row header'>
          <div className='add' onClick={e=>{
            me.setState({items: [...me.state.items,
              {category:'category', name:'new', price:10}]})}} />
          <input className='new-todo' placeholder={lang.what}/>
          <div className='print' onClick={e=>{
            me.setState({items: [...me.state.items,
              {category:'category', name:'new', price:10}]})}} />
        </div>
        <section className='main'><ul>
          <li className='row title'>
          { 
            me.state.category.map((c,i)=>c[lang.item_name])
            .map((c,i)=><div key={i} className={'item' + i}>{c}</div>)
          }
          <div className='amount'>{lang.amount}</div>
          </li>
          {
            me.state.items.map((c,i)=>
              <QuoteItem key={i} category={me.state.category} 
                sum={value=>{
                  var items = me.state.items
                  items[i].price = value
                  me.setState({items: items})
                }}
                remove={e=>{
                  let items = [...me.state.items]
                  items.splice(i,1)
                  me.setState({items: items})
                }}
              />
            )
          }
        </ul></section>
        <div className='footer'>
          <div>{parseFloat(Math.round(me.state.items.reduce((p,c) => p + c.price, 0) * 100) / 100).toFixed(2)}</div>
          <div>{lang.summary}:</div>
        </div>
      </div>
    )
  }
}
export default connect(any => any)(quote)